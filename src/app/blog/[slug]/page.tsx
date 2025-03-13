import { unstable_ViewTransition as ViewTransition } from "react";

import Image from "next/image";
import { notFound } from "next/navigation";

import { articles } from "../articles.data";
import { transitionNames } from "../transitions";
import { FloatingToc } from "./floating-toc";
import { Breadcrumbs } from "./breadcrumbs";
import { Metadata } from "next";

type Article = (typeof articles)[number];

const findArticleOrNotFound = async (slug: string): Promise<Article> => {
  const article = articles.find((article) => article.slug === slug);
  if (!article) notFound();
  return article;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;
  const article = await findArticleOrNotFound(slug);

  return {
    title: article.title,
    description: article.content
      .map((content) => content.content)
      .join("")
      .substring(0, 120),
  };
};

const dateFormatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = await findArticleOrNotFound(slug);

  return (
    <div className="px-8 container mx-auto md py-8 gap-8">
      <article className="bg-zinc-900 p-4 rounded-lg">
        <header className="grid grid-cols-[200px_minmax(0,1fr)]">
          <div className="aspect-square relative grid place-items-center">
            <ViewTransition name={transitionNames.postThumbnailImage(slug)}>
              <Image src={article.image} alt={article.title} height={240} />
            </ViewTransition>
          </div>

          <div
            className="grid content-center gap-2"
            css={{
              opacity: 1,
              transition: "opacity 0.5s 0.2s ease-out",
              "@starting-style": {
                opacity: 0,
              },
            }}
          >
            <Breadcrumbs
              items={[
                { href: "/", label: "HOME" },
                { href: "/blog", label: "ブログ" },
              ]}
            />
            <h1 className="text-4xl font-bold leading-10">{article.title}</h1>
            <p className="text-md font-bold text-gray-500">
              {dateFormatter.format(article.createdAt)}
            </p>
          </div>
        </header>

        <div
          className="mt-8"
          css={{
            opacity: 1,
            transition: "opacity 0.5s 0.2s ease-out",
            "@starting-style": {
              opacity: 0,
            },
          }}
        >
          <div className="prose leading-8">
            {article.content.map((content) => {
              switch (content.type) {
                case "paragraph": {
                  return (
                    <p key={content.content} className="leading-8 my-4">
                      {content.content}
                    </p>
                  );
                }
                case "heading": {
                  return (
                    <h2
                      className="text-2xl font-bold mt-16 mb-8"
                      key={content.slug}
                      id={content.slug}
                    >
                      {content.content}
                    </h2>
                  );
                }
              }
            })}
          </div>
        </div>
      </article>

      <FloatingToc
        headings={article.content
          .filter((c) => c.type === "heading")
          .map((content) => ({
            slug: content.slug,
            content: content.content,
          }))}
      />
    </div>
  );
}
