"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const isActive =
    item.href === path ||
    (item.href !== "/" && path.startsWith(item.href));

  return (
    <div className="relative w-full border-b border-black/5 dark:border-white/10 last:border-0">
      <Link
        href={item.href}
        onClick={item.submenu ? () => setSubmenuOpen(!submenuOpen) : undefined}
        className={`flex items-center justify-between w-full py-3.5 text-[15px] font-medium transition-colors ${
          isActive
            ? "text-primary"
            : "text-black/80 dark:text-white/85 hover:text-primary"
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25em"
            height="1.25em"
            viewBox="0 0 24 24"
            className={`transition-transform ${submenuOpen ? "rotate-180" : ""}`}
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
        <div className="pb-2 pl-3">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block py-2 text-sm text-black/55 hover:text-primary dark:text-white/55"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
