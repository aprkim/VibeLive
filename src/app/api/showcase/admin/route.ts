import { NextRequest, NextResponse } from "next/server";
import { readItems } from "@/lib/showcase";

export const dynamic = "force-dynamic";

function checkToken(req: NextRequest): boolean {
  const token = req.nextUrl.searchParams.get("token");
  const expected = process.env.ADMIN_TOKEN;
  if (!expected || !token) return false;
  return token === expected;
}

// GET /api/showcase/admin?token=X — returns all items for admin
export async function GET(req: NextRequest) {
  if (!checkToken(req)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const items = readItems().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return NextResponse.json(items);
}
