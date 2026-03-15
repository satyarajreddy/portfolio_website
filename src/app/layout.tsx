import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satyaraj Reddy Nandi - Software Engineer",
  description: "Portfolio of Satyaraj Reddy Nandi | Python | Go | AWS | Backend Systems | Cloud Infra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
