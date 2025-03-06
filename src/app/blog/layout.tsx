import { unstable_ViewTransition as ViewTransition } from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransition>
      {/* ViewTransition の支配領域内では、全てのページ間遷移がクロスフェードになる */}
      {children}
    </ViewTransition>
  );
}
