import { unstable_ViewTransition as ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";

import { articles } from "./articles.data";
import { transitionNames } from "./transitions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog",
};

const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function BlogPage() {
  return (
    <div className="p-8 container mx-auto md">
      <h1 className="text-4xl font-bold">Blog</h1>

      <div className="mt-8 grid grid-cols-1 gap-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            className="flex gap-4"
            href={`/blog/${article.slug}`}
          >
            <div className="aspect-square relative w-40">
              <ViewTransition
                name={transitionNames.postThumbnailImage(article.slug)}
              >
                <Image src={article.image} alt="" fill />
              </ViewTransition>
            </div>

            <div className="self-center">
              <h2 className="text-xl font-bold">{article.title}</h2>
              <p className="text-md font-bold text-gray-500">
                {dateFormatter.format(article.createdAt)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
