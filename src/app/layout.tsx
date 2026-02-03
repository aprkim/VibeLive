import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VibeLive — Real human connection for vibecoded apps",
  description: "Plug-and-play video chat for vibecoders building in the AI era. A bridge for real human connection.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
