import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Bridging The Canyon",
  description: "Bridging The Canyon Blog & Adventures",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
