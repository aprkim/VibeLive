import { NextRequest, NextResponse } from "next/server";
import { updateStatus, deleteItem } from "@/lib/showcase";
import type { ShowcaseStatus } from "@/types/showcase";

export const dynamic = "force-dynamic";

function checkToken(req: NextRequest): boolean {
  const token = req.nextUrl.searchParams.get("token");
  const expected = process.env.ADMIN_TOKEN;
  if (!expected || !token) return false;
  return token === expected;
}

// PATCH /api/showcase/[id]?token=X — approve or reject
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkToken(req)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const { id } = await params;
    const body = await req.json();
    const { status } = body as { status: ShowcaseStatus };

    if (!["approved", "rejected"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const ok = updateStatus(id, status);
    if (!ok) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

// DELETE /api/showcase/[id]?token=X — delete item
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkToken(req)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const { id } = await params;
  const ok = deleteItem(id);
  if (!ok) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
