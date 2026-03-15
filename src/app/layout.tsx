import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://satyaraj.dev";
const title = "Satyaraj Reddy Nandi - Software Development Engineer";
const description =
  "Portfolio of Satyaraj Reddy Nandi, a Software Development Engineer specializing in backend systems, Go, Python, and cloud infrastructure (AWS/Azure). View my latest projects and work experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Software Development Engineer",
    "Backend Engineer",
    "Go Developer",
    "Python Developer",
    "AWS",
    "Azure",
    "Cloud Infrastructure",
    "Distributed Systems",
    "Microservices",
    "API Development",
    "High-throughput Systems",
    "TypeScript",
    "React",
    "Next.js",
    "PySpark",
    "Machine Learning",
    "Satyaraj Reddy Nandi",
  ],
  authors: [{ name: "Satyaraj Reddy Nandi", url: siteUrl }],
  creator: "Satyaraj Reddy Nandi",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Satyaraj Reddy Nandi",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Satyaraj Reddy Nandi",
  url: siteUrl,
  jobTitle: "Software Development Engineer II",
  worksFor: {
    "@type": "Organization",
    name: "Microsoft",
  },
  sameAs: [
    "https://github.com/satyarajreddy",
    "https://www.linkedin.com/in/satyarajreddy",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Georgia State University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Christ University",
    },
  ],
  knowsAbout: [
    "Go",
    "Python",
    "TypeScript",
    "AWS",
    "Azure",
    "Backend Systems",
    "Distributed Systems",
    "Cloud Infrastructure",
    "Microservices",
    "Machine Learning",
    "PySpark",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
