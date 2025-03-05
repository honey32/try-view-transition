import { FC } from "react";
import { GlobalStyles } from "restyle";

export const FloatingToc: FC<{
  headings: { slug: string; content: string }[];
}> = ({ headings }) => {
  return (
    <dialog
      open
      className="fixed right-4 bottom-4 mr-0 bg-zinc-800 shadow-lg text-[--foreground] rounded-lg"
    >
      <GlobalStyles>
        {{
          // これで、auto 絡みのアニメーションが効くはずだが効かない…
          "@supports (interpolate-size: allow-keywords)": {
            ":root": {
              interpolateSize: "allow-keywords",
            },
          },
        }}
      </GlobalStyles>
      <aside>
        <details
          css={{
            display: "flex",
            flexDirection: "column-reverse",

            transition: "all 0.3s ease-in-out",

            "&::details-content": {
              transition: "height 2s ease",
              height: 0,
              overflow: "clip",
            },
            "&[open]::details-content": {
              height: "auto",
            },
          }}
        >
          <summary className="px-4 py-4 text-end list-none hover:bg-zinc-700">
            目次を開く
          </summary>
          <div className="pt-4">
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
          </div>
        </details>
      </aside>
    </dialog>
  );
};
