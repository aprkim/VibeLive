import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "VibeLive — Real-time video for modern apps",
  description: "Add real human connection to your product in minutes.",
  icons: {
    icon: "/favicon-vibelive.png",
  },
  openGraph: {
    title: "VibeLive — Real-time video for modern apps",
    description: "Add real human connection to your product in minutes.",
    url: "https://home.vibelive.site",
    siteName: "VibeLive",
    images: [
      {
        url: "https://vibelive.site/social/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeLive — Real-time video for modern apps",
    description: "Add real human connection to your product in minutes.",
    images: ["https://vibelive.site/social/og-image.png"],
    site: "@vibelivehq",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JVVRKQPXLS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JVVRKQPXLS');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
