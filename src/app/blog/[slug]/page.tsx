import { unstable_ViewTransition as ViewTransition } from "react";

import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

import { articles } from "../articles.data";
import { transitionNames } from "../transitions";

const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((article) => article.slug === slug);
  if (!article) notFound();

  return (
    <div>
      <div className="mx-auto aspect-[4/1] relative w-full grid place-items-center">
        <ViewTransition name={transitionNames.postThumbnailImage(slug)}>
          <Image
            src={article.image}
            alt={article.title}
            height={240}
            style={{ opacity: 0.8 }}
          />
        </ViewTransition>
      </div>

      <div
        className="px-8 container mx-auto md"
        css={{
          opacity: 1,
          transition: "opacity 0.5s 0.2s ease-out",
          "@starting-style": {
            opacity: 0,
          },
        }}
      >
        <div className="bg-zinc-900 p-4 rounded-lg">
          {/* breadcrumbs */}
          <nav className="text-sm text-gray-400">
            <ul className="flex gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  HOME
                </Link>
              </li>
              <li role="separator">
                <span className="text-gray-500">/</span>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  ブログ
                </Link>
              </li>
              <li role="separator">
                <span className="text-gray-500">/</span>
              </li>
            </ul>
          </nav>

          <h1 className="text-4xl font-bold leading-10">{article.title}</h1>
          <p className="text-md font-bold text-gray-500">
            {dateFormatter.format(article.createdAt)}
          </p>

          <div
            className="mt-8"
            css={{
              "& *:where(h2, p)": {
                marginBlock: "1rem",
              },

              "& *:where(h2)": {
                fontSize: "1.5rem",
              },
            }}
          >
            <div
              className="prose leading-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
