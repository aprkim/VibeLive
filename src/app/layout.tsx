import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Built with VibeLive — Showcase",
  description: "Real vibecoded apps powered by live human connection. See what builders are creating with VibeLive.",
  icons: {
    icon: "/favicon-vibelive.png",
  },
  openGraph: {
    title: "Built with VibeLive — Showcase",
    description: "Real vibecoded apps powered by live human connection. See what builders are creating with VibeLive.",
    url: "https://built.vibelive.site",
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
    title: "Built with VibeLive — Showcase",
    description: "Real vibecoded apps powered by live human connection. See what builders are creating with VibeLive.",
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
