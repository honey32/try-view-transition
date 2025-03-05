"use client";

import {
  FC,
  startTransition,
  useState,
  unstable_ViewTransition as ViewTransition,
} from "react";

export const FloatingToc: FC<{
  headings: { slug: string; content: string }[];
}> = ({ headings }) => {
  const [enlarged, setEnlarged] = useState(false);
  const open = () => {
    startTransition(() => {
      setEnlarged(true);
    });
  };
  const close = () => {
    startTransition(() => {
      setEnlarged(false);
    });
  };

  return (
    <ViewTransition>
      <dialog
        open
        className="fixed right-4 bottom-4 mr-0 bg-zinc-800 shadow-lg text-[--foreground] rounded-lg"
      >
        {enlarged ? (
          <aside className="w-64">
            <h2 className="text-lg font-bold px-4 pt-4 pb-2">目次</h2>
            <ul>
              {headings.map((content) => {
                return (
                  <li key={content.slug}>
                    <a
                      href={`#${content.slug}`}
                      className="block py-2 px-4 hover:bg-zinc-700 "
                    >
                      {content.content}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-2 pr-2 border-t-[1px] border-zinc-500 flex justify-end">
              <button
                className="text-yellow-200 font-bold px-4 py-2 hover:bg-zinc-700"
                onClick={close}
              >
                閉じる
              </button>
            </div>
          </aside>
        ) : (
          <aside>
            <button
              className="text-yellow-200 font-bold px-8 py-4 rounded-lg hover:bg-zinc-700"
              onClick={open}
            >
              目次を表示
            </button>
          </aside>
        )}
      </dialog>
    </ViewTransition>
  );
};
