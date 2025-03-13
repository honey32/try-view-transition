import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./nav-bar";

export const metadata: Metadata = {
  title: {
    template: "%s | ViewTransition 検証",
    default: "ViewTransition 検証",
  },
  description:
    "React の ViewTransition コンポーネントの動作検証を行うアプリです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
        <NavBar />
      </body>
    </html>
  );
}
