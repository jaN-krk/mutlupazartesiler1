"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderItem } from "../../../../types/menu";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const isActive =
    item.href === path ||
    (item.href !== "/" && path.startsWith(item.href));

  return (
    <li
      className="relative"
      onMouseEnter={() => item.submenu && setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}
    >
      <Link
        href={item.href}
        className={`relative inline-flex items-center gap-0.5 rounded-md px-2.5 xl:px-3 py-1.5 text-[13px] xl:text-sm font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap ${
          isActive
            ? "text-dark dark:text-white bg-black/6 dark:bg-white/10 after:absolute after:left-2.5 after:right-2.5 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary"
            : "text-dark/75 dark:text-white/80 hover:text-dark dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8"
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="opacity-70"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
      {submenuOpen && item.submenu && (
        <ul className="absolute left-0 top-full z-50 mt-1 min-w-48 rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/5 dark:bg-darklight dark:ring-white/10">
          {item.submenu.map((subItem, index) => (
            <li key={index}>
              <Link
                href={subItem.href}
                className="block px-4 py-2 text-sm text-dark/80 hover:bg-black/5 hover:text-dark dark:text-white/80 dark:hover:bg-white/10"
              >
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default HeaderLink;
