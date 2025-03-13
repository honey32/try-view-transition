"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, unstable_ViewTransition as ViewTransition } from "react";

const items = [
  {
    label: "Home",
    href: "/",
    strict: true,
  },
  {
    label: "Modal",
    href: "/modal",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export const NavBar: FC = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-zinc-900 shadow-lg select-none">
      <div className="max-w-xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {items.map((item) => {
            const isActive = item.strict
              ? pathname === item.href
              : pathname.startsWith(item.href);

            return (
              <Link
                href={item.href}
                key={item.href}
                data-active={isActive || undefined}
                className="group relative grid px-6 py-6 place-items-center"
              >
                {isActive && (
                  <ViewTransition name="global-navbar-indicator">
                    <div className="-z-10 absolute inset-2 bg-sky-900 rounded-3xl"></div>
                  </ViewTransition>
                )}

                {!isActive && (
                  <div className="-z-10 absolute inset-2 rounded-3xl group-hover:bg-sky-950"></div>
                )}

                <span className="inline-block text-gray-600 group-data-active:text-blue-100 group-hover:text-blue-100">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
