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
      {/* スクロールバーを表示しっぱなしにして、ページ間の見え方を統一する */}
      <body className="antialiased min-h-[calc(100vh+1rem)]">
        {children}
        <div aria-hidden="true" className="h-[72px]"></div>
        <NavBar />
      </body>
    </html>
  );
}
