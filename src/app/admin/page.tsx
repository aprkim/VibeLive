"use client";

import { Suspense, useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import type { ShowcaseItem } from "@/types/showcase";

type Tab = "pending" | "approved" | "rejected" | "all";

function AdminInner() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const [items, setItems] = useState<ShowcaseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tab, setTab] = useState<Tab>("pending");
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    try {
      const res = await fetch(`/api/showcase/admin?token=${encodeURIComponent(token)}`);
      if (!res.ok) {
        setError("Not found");
        return;
      }
      const data = await res.json();
      setItems(data);
    } catch {
      setError("Failed to load");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      setError("Not found");
      setLoading(false);
      return;
    }
    fetchItems();
  }, [token, fetchItems]);

  async function handleAction(id: string, status: "approved" | "rejected") {
    setActionLoading(id);
    try {
      const res = await fetch(
        `/api/showcase/${id}?token=${encodeURIComponent(token)}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        }
      );
      if (res.ok) {
        setItems((prev) =>
          prev.map((i) => (i.id === id ? { ...i, status } : i))
        );
      }
    } finally {
      setActionLoading(null);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this item permanently?")) return;
    setActionLoading(id);
    try {
      const res = await fetch(
        `/api/showcase/${id}?token=${encodeURIComponent(token)}`,
        { method: "DELETE" }
      );
      if (res.ok) {
        setItems((prev) => prev.filter((i) => i.id !== id));
      }
    } finally {
      setActionLoading(null);
    }
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#060606] flex items-center justify-center">
        <p className="text-[#6b7280] text-sm">Not found</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#060606] flex items-center justify-center">
        <p className="text-[#6b7280] text-sm">Loading...</p>
      </div>
    );
  }

  const filtered =
    tab === "all" ? items : items.filter((i) => i.status === tab);

  const counts = {
    pending: items.filter((i) => i.status === "pending").length,
    approved: items.filter((i) => i.status === "approved").length,
    rejected: items.filter((i) => i.status === "rejected").length,
    all: items.length,
  };

  const tabs: { key: Tab; label: string }[] = [
    { key: "pending", label: `Pending (${counts.pending})` },
    { key: "approved", label: `Approved (${counts.approved})` },
    { key: "rejected", label: `Rejected (${counts.rejected})` },
    { key: "all", label: `All (${counts.all})` },
  ];

  return (
    <div className="min-h-screen bg-[#060606] text-[#e5e7eb]" style={{ colorScheme: "dark" }}>
      <div className="max-w-[980px] mx-auto px-6 py-12">
        <h1 className="text-xl font-bold mb-1">Showcase Admin</h1>
        <p className="text-[13px] text-[#6b7280] mb-8">
          Review and manage showcase submissions.
        </p>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 border-b border-[#1a1a1a]">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`text-[13px] font-medium px-4 py-2.5 border-b-2 transition-colors ${
                tab === t.key
                  ? "border-[#0EA5A4] text-[#0EA5A4]"
                  : "border-transparent text-[#6b7280] hover:text-[#9ca3af]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-[#6b7280] text-sm py-12 text-center">
            No items in this category.
          </p>
        ) : (
          <div className="space-y-3">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[14px] font-semibold truncate">
                        {item.appName}
                      </h3>
                      <span
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                          item.status === "approved"
                            ? "bg-green-500/10 text-green-400"
                            : item.status === "rejected"
                            ? "bg-red-500/10 text-red-400"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        {item.status}
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#0EA5A4]/10 text-[#0EA5A4]">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#9ca3af] mb-1">{item.tagline}</p>
                    {item.problemSolved && (
                      <p className="text-[12px] text-[#6b7280] mb-1">
                        {item.problemSolved}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#4b5563] mt-2">
                      {item.builderName && <span>Builder: {item.builderName}</span>}
                      {item.demoUrl && (
                        <a href={item.demoUrl} target="_blank" rel="noopener noreferrer" className="text-[#0EA5A4] hover:underline">
                          Demo
                        </a>
                      )}
                      {item.screenshotUrl && (
                        <a href={item.screenshotUrl} target="_blank" rel="noopener noreferrer" className="text-[#0EA5A4] hover:underline">
                          Screenshot
                        </a>
                      )}
                      <span>
                        {new Date(item.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    {item.status !== "approved" && (
                      <button
                        onClick={() => handleAction(item.id, "approved")}
                        disabled={actionLoading === item.id}
                        className="text-[12px] font-medium px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors disabled:opacity-50"
                      >
                        Approve
                      </button>
                    )}
                    {item.status !== "rejected" && (
                      <button
                        onClick={() => handleAction(item.id, "rejected")}
                        disabled={actionLoading === item.id}
                        className="text-[12px] font-medium px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors disabled:opacity-50"
                      >
                        Reject
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(item.id)}
                      disabled={actionLoading === item.id}
                      className="text-[12px] font-medium px-3 py-1.5 rounded-lg bg-[#1a1a1a] text-[#6b7280] hover:text-[#9ca3af] transition-colors disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminShowcasePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#060606] flex items-center justify-center">
          <p className="text-[#6b7280] text-sm">Loading...</p>
        </div>
      }
    >
      <AdminInner />
    </Suspense>
  );
}
