export type ShowcaseCategory =
  | "Learning"
  | "Coaching"
  | "Community"
  | "Tool"
  | "Other";

export type ShowcaseStatus = "pending" | "approved" | "rejected";

export interface ShowcaseItem {
  id: string;
  status: ShowcaseStatus;
  appName: string;
  tagline: string;
  problemSolved?: string;
  category: ShowcaseCategory;
  builderName?: string;
  builderLink?: string;
  demoUrl?: string;
  screenshotUrl?: string;
  createdAt: string;
}

export const CATEGORIES: ShowcaseCategory[] = [
  "Learning",
  "Coaching",
  "Community",
  "Tool",
  "Other",
];
