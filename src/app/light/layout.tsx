import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon-vibelive-w.png",
  },
};

export default function LightLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
