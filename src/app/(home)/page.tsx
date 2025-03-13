import type { Metadata } from "next";
import { Card, CardDescription, CardTitle } from "./card";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="p-8 container mx-auto md grid place-items-center h-screen">
      <div className="text-gray-200">
        <h1 className="text-4xl font-bold text-gray-100">
          ViewTransition の動作検証
        </h1>
        <hr className="my-6 border-gray-600" />
        <p>
          React の ViewTransition コンポーネントの動作検証を行うアプリです。
        </p>
        <p>
          ページ下部にあるナビゲーションバーから、それぞれのページにアクセスできます
        </p>

        <h2 className="text-2xl font-bold text-gray-100 mt-8">ページ一覧</h2>
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
          <Card href="/modal">
            <CardTitle>モーダル</CardTitle>
            <CardDescription>
              <code>/modal</code>
            </CardDescription>
            <CardDescription>
              モーダルダイアログの開閉に ViewTransition
              を適用できるかの検証です。
            </CardDescription>
          </Card>

          <Card href="/blog">
            <CardTitle>ブログ</CardTitle>
            <CardDescription>
              <code>/blog</code>
            </CardDescription>
            <CardDescription>
              一覧ページと詳細ページの間の Container Transform
              的な（「ニュッ」と動くタイプの）アニメーションの動作検証です。
            </CardDescription>
          </Card>
        </div>
      </div>
    </div>
  );
}
