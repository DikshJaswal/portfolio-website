import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dikshit Jaswal - Full Stack Web Developer",
  description: "Portfolio of Dikshit Jaswal, a Full Stack Web Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building exceptional digital experiences.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio", "Dikshit Jaswal"],
  authors: [{ name: "Dikshit Jaswal" }],
  creator: "Dikshit Jaswal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dikshitjaswal.com",
    title: "Dikshit Jaswal - Full Stack Web Developer",
    description: "Portfolio of Dikshit Jaswal, a Full Stack Web Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    siteName: "Dikshit Jaswal Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--card-bg)',
              color: 'var(--foreground)',
              border: '1px solid var(--border)',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
            },
            success: {
              iconTheme: {
                primary: 'var(--primary)',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ff6b35',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
