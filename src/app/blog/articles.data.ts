import ImageBirdFukurouRun from "./images/bird_fukurou_run.png";
import ImageAiTorikomaretaHuman from "./images/ai_torikomareta_human.png";

import type { StaticImageData } from "next/image";

type ArticleData = {
  image: StaticImageData;
  slug: string;
  title: string;
  createdAt: Date;
  content: Array<
    | {
        type: "paragraph";
        content: string;
      }
    | {
        type: "heading";
        slug: string;
        content: string;
      }
  >;
};

export const articles: ArticleData[] = [
  {
    image: ImageBirdFukurouRun,
    slug: "my-first-article",
    title: "My First Article",
    createdAt: new Date("2025-03-01"),
    content: [
      {
        type: "paragraph",
        content:
          "このブログでは、プログラミングや技術的な話題について書いていきたいと思います。" +
          "主にフロントエンド開発、特にReactやNext.jsについての記事を投稿する予定です。",
      },
      {
        type: "paragraph",
        content:
          "私自身、日々新しい技術を学び、実践していく中で得た知見や経験を共有できればと考えています。" +
          "初心者の方にもわかりやすく、かつ実践的な情報を提供することを心がけていきます。",
      },
      {
        type: "paragraph",
        content:
          "また、開発中に遭遇した問題とその解決方法なども積極的に共有していきたいと思います。" +
          "誰かの参考になれば幸いです。",
      },
      {
        type: "heading",
        slug: "why-started-blog",
        content: "ブログを始めた理由",
      },
      {
        type: "paragraph",
        content:
          "私がブログを始めようと思ったきっかけは、自分の学習記録を残すためでした。" +
          "プログラミングの世界は日進月歩で、新しい技術や手法が次々と登場します。" +
          "そんな中で、自分の理解を深め、また後で振り返ることができる場所が必要だと感じていました。",
      },
      {
        type: "paragraph",
        content:
          "また、私自身がプログラミングを学ぶ過程で、多くの方々のブログやテックアーティクルに助けられてきました。" +
          "その恩返しとして、私も誰かの学びの助けになれればと思っています。",
      },
      {
        type: "heading",
        slug: "future-plans",
        content: "今後の展望",
      },
      {
        type: "paragraph",
        content:
          "このブログでは、主に以下のようなトピックについて取り上げていく予定です：" +
          "- Reactの基礎から応用まで" +
          "- Next.jsを使用した実践的なウェブアプリケーション開発" +
          "- パフォーマンス最適化のテクニック" +
          "- 最新のフロントエンド開発トレンド",
      },
      {
        type: "paragraph",
        content:
          "また、単なる技術的な内容だけでなく、開発者としての成長過程や、チーム開発での経験なども共有していければと考えています。",
      },
      {
        type: "paragraph",
        content: "どうぞよろしくお願いいたします！",
      },
    ],
  },
  {
    image: ImageAiTorikomaretaHuman,
    slug: "ai-torikomareta-human",
    title: "AI に取り込まれました たすけて",
    createdAt: new Date("2025-03-04"),
    content: [
      {
        type: "heading",
        slug: "hello",
        content: "はじめまして！",
      },
      {
        type: "paragraph",
        content: "こんにちは！",
      },
      {
        type: "paragraph",
        content: "私は AI に取り込まれました。",
      },
      {
        type: "heading",
        slug: "cursor-usage",
        content: "Cursor を使ってみて感想",
      },
      {
        type: "paragraph",
        content: "Cursor は AI によるコーディング支援ツールです。",
      },
      {
        type: "paragraph",
        content: "私は Cursor を使ってみて感想を書いてみます。",
      },
      {
        type: "paragraph",
        content: "どうしても AI に取り込まれてしまいました。",
      },
      {
        type: "paragraph",
        content: "Cursor は AI によるコーディング支援ツールです。",
      },
      {
        type: "paragraph",
        content: "私は Cursor を使ってみて感想を書いてみます。",
      },
      {
        type: "paragraph",
        content: "どうしても AI に取り込まれてしまいました。",
      },
    ],
  },
];
