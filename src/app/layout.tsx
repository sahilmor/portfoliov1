import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahil Mor | Senior Frontend Engineer & UI/UX Specialist",
  description:
    "Engineering high-fidelity web applications, design systems, and resilient frontend architectures with Swiss precision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-carbon text-bone antialiased selection:bg-vermilion selection:text-bone min-h-screen">
        {children}
      </body>
    </html>
  );
}
