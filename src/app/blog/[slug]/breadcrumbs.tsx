import Link from "next/link";
import { FC, Fragment } from "react";

type Props = {
  items: Array<{
    href: string;
    label: string;
  }>;
};

export const Breadcrumbs: FC<Props> = ({ items }) => {
  return (
    <nav className="text-sm text-gray-400">
      <ul className="flex gap-2">
        {items.map((item) => (
          <Fragment key={item.href}>
            <li>
              <Link href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            </li>
            <li role="separator">
              <span className="text-gray-500">/</span>
            </li>
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};
