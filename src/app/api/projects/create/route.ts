import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// POST /api/projects/create
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, projectName } = body;

    // Validate email
    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Generate project credentials
    const projectId = `p_${generateId()}`;
    const projectKey = `k_${generateId()}`;
    const name = (projectName && typeof projectName === "string" && projectName.trim())
      ? projectName.trim()
      : "My App";

    // TODO: Store project in database
    // await db.projects.create({ projectId, projectKey, email: email.trim(), name });

    return NextResponse.json({
      projectId,
      projectKey,
      projectName: name,
    }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

function generateId(): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const bytes = new Uint8Array(12);
  crypto.getRandomValues(bytes);
  for (const byte of bytes) {
    result += chars[byte % chars.length];
  }
  return result;
}
