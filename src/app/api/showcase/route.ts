import { NextRequest, NextResponse } from "next/server";
import { getApprovedItems, addItem } from "@/lib/showcase";
import type { ShowcaseItem, ShowcaseCategory } from "@/types/showcase";
import { CATEGORIES } from "@/types/showcase";

export const dynamic = "force-dynamic";

// GET /api/showcase — public: returns approved items
export async function GET() {
  const items = getApprovedItems();
  return NextResponse.json(items);
}

// POST /api/showcase — public: submit a new showcase item
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { appName, tagline, problemSolved, category, builderName, builderLink, demoUrl, screenshotUrl } = body;

    // Required fields
    if (!appName || typeof appName !== "string" || !appName.trim()) {
      return NextResponse.json({ error: "appName is required" }, { status: 400 });
    }
    if (!tagline || typeof tagline !== "string" || !tagline.trim()) {
      return NextResponse.json({ error: "tagline is required" }, { status: 400 });
    }
    if (tagline.length > 120) {
      return NextResponse.json({ error: "tagline must be 120 characters or less" }, { status: 400 });
    }
    if (!category || !CATEGORIES.includes(category as ShowcaseCategory)) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    // Optional field validation
    if (problemSolved && typeof problemSolved === "string" && problemSolved.length > 240) {
      return NextResponse.json({ error: "problemSolved must be 240 characters or less" }, { status: 400 });
    }

    // Validate external URLs (builderLink, demoUrl must be absolute)
    for (const [key, val] of Object.entries({ builderLink, demoUrl })) {
      if (val && typeof val === "string" && val.trim()) {
        try {
          new URL(val);
        } catch {
          return NextResponse.json({ error: `${key} must be a valid URL` }, { status: 400 });
        }
      }
    }
    // screenshotUrl can be a relative path from upload (e.g. /uploads/...) or an absolute URL
    if (screenshotUrl && typeof screenshotUrl === "string" && screenshotUrl.trim()) {
      const s = screenshotUrl.trim();
      if (!s.startsWith("/")) {
        try {
          new URL(s);
        } catch {
          return NextResponse.json({ error: "screenshotUrl must be a valid URL" }, { status: 400 });
        }
      }
    }

    // Sanitize strings (strip HTML tags)
    const clean = (s?: string) => s?.replace(/<[^>]*>/g, "").trim() || undefined;

    const item: ShowcaseItem = {
      id: `sc-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      status: "pending",
      appName: clean(appName)!,
      tagline: clean(tagline)!,
      problemSolved: clean(problemSolved),
      category: category as ShowcaseCategory,
      builderName: clean(builderName),
      builderLink: builderLink?.trim() || undefined,
      demoUrl: demoUrl?.trim() || undefined,
      screenshotUrl: screenshotUrl?.trim() || undefined,
      createdAt: new Date().toISOString(),
    };

    addItem(item);

    return NextResponse.json({ success: true, id: item.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
