"use client";

import { useState, useMemo } from "react";
import type { ShowcaseItem, ShowcaseCategory } from "@/types/showcase";
import { CATEGORIES } from "@/types/showcase";

function CategoryPill({ category }: { category: ShowcaseCategory }) {
  return (
    <span className="inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-accent/10 text-[#0EA5A4]">
      {category}
    </span>
  );
}

function ShowcaseCard({ item }: { item: ShowcaseItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group rounded-2xl border border-[#1a1a1a] bg-[#0f0f0f] overflow-hidden transition-colors hover:border-[#252525]">
      {/* Screenshot */}
      <div className="aspect-video bg-[#0a0a0a] relative overflow-hidden">
        {item.screenshotUrl && !imgError ? (
          <img
            src={item.screenshotUrl}
            alt={item.appName}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[#252525]"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-[15px] font-semibold text-[#e5e7eb] leading-tight">
            {item.appName}
          </h3>
          <CategoryPill category={item.category} />
        </div>

        <p className="text-[13px] text-[#9ca3af] leading-relaxed mb-3">
          {item.tagline}
        </p>

        {item.problemSolved && (
          <p className="text-[12px] text-[#6b7280] leading-relaxed mb-3">
            {item.problemSolved}
          </p>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-[#1a1a1a]">
          {item.builderName ? (
            <span className="text-[12px] text-[#6b7280]">
              Built by{" "}
              {item.builderLink ? (
                <a
                  href={item.builderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9ca3af] hover:text-[#0EA5A4] transition-colors"
                >
                  {item.builderName}
                </a>
              ) : (
                <span className="text-[#9ca3af]">{item.builderName}</span>
              )}
            </span>
          ) : (
            <span />
          )}

          {item.demoUrl && (
            <a
              href={item.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#0EA5A4] hover:text-[#0d9488] transition-colors"
            >
              Visit
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

type SortOption = "newest" | "oldest";

export default function Gallery({ items }: { items: ShowcaseItem[] }) {
  const [category, setCategory] = useState<ShowcaseCategory | "All">("All");
  const [sort, setSort] = useState<SortOption>("newest");

  const filtered = useMemo(() => {
    let result = items;
    if (category !== "All") {
      result = result.filter((i) => i.category === category);
    }
    result = [...result].sort((a, b) => {
      const diff =
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return sort === "newest" ? diff : -diff;
    });
    return result;
  }, [items, category, sort]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as ShowcaseCategory | "All")}
          className="text-[13px] bg-[#0f0f0f] border border-[#1a1a1a] text-[#e5e7eb] rounded-lg px-3 py-2 outline-none focus:border-[#0EA5A4]/40 transition-colors"
        >
          <option value="All">All categories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="text-[13px] bg-[#0f0f0f] border border-[#1a1a1a] text-[#e5e7eb] rounded-lg px-3 py-2 outline-none focus:border-[#0EA5A4]/40 transition-colors"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <ShowcaseCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-[#6b7280] text-sm">No builds found for this category.</p>
        </div>
      )}
    </div>
  );
}
