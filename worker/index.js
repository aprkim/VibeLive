const BACKEND_URL = 'https://proto2.makedo.com/v05/authAccounts.jsp';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Vibelive - Create Account (Test)</title>
<style>
  body { font-family: Arial, sans-serif; max-width: 480px; margin: 60px auto; padding: 0 20px; }
  h2 { margin-bottom: 4px; }
  p.sub { color: #666; margin-top: 0; }
  label { display: block; margin-top: 14px; font-weight: bold; font-size: 14px; }
  input[type="text"], input[type="email"], input[type="password"] {
    width: 100%; padding: 8px; margin-top: 4px; box-sizing: border-box;
    border: 1px solid #ccc; border-radius: 4px; font-size: 14px;
  }
  button { margin-top: 20px; padding: 10px 24px; background: #46db91; color: #fff;
    border: none; border-radius: 5px; font-size: 16px; font-weight: bold; cursor: pointer; }
  button:hover { background: #3bc47e; }
  #result, #trialResult { margin-top: 20px; padding: 12px; border-radius: 4px; display: none; font-size: 14px; }
  .ok { background: #e6f9ee; border: 1px solid #46db91; }
  .err { background: #fdecea; border: 1px solid #e74c3c; }
</style>
</head>
<body>

<h2>Trial Project Credentials</h2>
<form id="trialForm">
  <button type="submit">Get Trial Project Keys</button>
</form>
<div id="trialResult"></div>
<hr>
<h2>Create Vibelive Account</h2>
<p class="sub">Test harness &mdash; posts via Cloudflare Worker proxy</p>

<form id="accountForm">
  <label>Email
    <input type="email" name="email" required placeholder="you@example.com">
  </label>
  <label>Password
    <input type="password" name="password" required placeholder="min 6 chars">
  </label>
  <label>Username (optional)
    <input type="text" name="username" placeholder="display name">
  </label>
  <label>On-Confirm Redirect URL
    <input type="text" name="onConfirmUrl" required value="http://localhost:8080/v05/vibelive-account.html" placeholder="URL to receive user data after confirmation">
  </label>

  <button type="submit">Create Account</button>
</form>

<div id="result"></div>

<script>
async function postToWorker(payload, resultDiv) {
  resultDiv.style.display = 'none';
  try {
    const res = await fetch(location.href, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const text = await res.text();
    let json;
    try { json = JSON.parse(text); } catch { json = { raw: text }; }

    resultDiv.style.display = 'block';
    if (res.ok && (json.success || json.projectId)) {
      resultDiv.className = 'ok';
      resultDiv.textContent = json.projectId
        ? 'projectId: ' + json.projectId + ', projectAuthToken: ' + json.projectAuthToken
        : 'Success! Check the email inbox for the confirmation link.';
    } else {
      resultDiv.className = 'err';
      resultDiv.textContent = 'Error ' + res.status + ': ' + (json.error || text);
    }
  } catch (err) {
    resultDiv.style.display = 'block';
    resultDiv.className = 'err';
    resultDiv.textContent = 'Network error: ' + err.message;
  }
}

document.getElementById('trialForm').addEventListener('submit', (e) => {
  e.preventDefault();
  postToWorker({ action: 'createTrialProject' }, document.getElementById('trialResult'));
});

document.getElementById('accountForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const payload = Object.fromEntries(fd);
  payload.action = 'createAccount';
  payload.type = 'basic';
  postToWorker(payload, document.getElementById('result'));
});
</script>

</body>
</html>`;

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    // GET — serve the HTML page
    if (request.method === 'GET') {
      return new Response(HTML, {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' },
      });
    }

    // Reject non-POST
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    try {
      // Parse JSON body from frontend
      const body = await request.json();

      // Inject the secret token
      body.vibeliveAuthToken = env.VIBELIVE_AUTH_TOKEN;

      // Forward as form-urlencoded (what the JSP backend expects)
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(body)) {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      }

      const backendRes = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
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
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }
  },
};
