const BACKEND_URL = 'https://proto2.makedo.com/v05/authAccounts.jsp';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // Build params from request body (POST) or empty (GET)
    const params = new URLSearchParams();

    if (request.method === 'POST') {
      try {
        const body = await request.json();
        for (const [key, value] of Object.entries(body)) {
          if (value !== undefined && value !== null) {
            params.append(key, String(value));
          }
        }
      } catch (err) {
        return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
          status: 400,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        });
      }
    } else if (request.method === 'GET') {
      // Pass through any query string params
      const url = new URL(request.url);
      for (const [key, value] of url.searchParams) {
        params.append(key, value);
      }
    } else {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    // Inject the secret token
    params.set('vibeliveAuthToken', env.VIBELIVE_AUTH_TOKEN);

    // Forward client IP so backend can rate-limit per user, not per worker
    const clientIp = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For') || '';

    // Forward as form-urlencoded (what the JSP backend expects)
    const backendRes = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Forwarded-For': clientIp,
        'X-Real-IP': clientIp,
      },
      body: params.toString(),
    });

    const responseText = await backendRes.text();

    return new Response(responseText, {
      status: backendRes.status,
      headers: {
        ...CORS_HEADERS,
        'Content-Type': backendRes.headers.get('Content-Type') || 'application/json',
      },
    });
  },
};
