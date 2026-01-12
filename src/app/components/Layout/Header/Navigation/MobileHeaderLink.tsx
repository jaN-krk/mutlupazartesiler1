import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };
  const path = usePathname();

  // If external link, render as anchor tag
  if (item.external) {
    return (
      <div className="relative w-full">
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 w-full py-2 text-black dark:text-white hover:text-primary dark:hover:text-primary focus:outline-none transition-colors"
          aria-label={item.label}
        >
          {item.icon && <Icon icon={item.icon} width="24" height="24" />}
          <span>{item.label}</span>
        </a>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : undefined}
        className={`flex items-center justify-between w-full py-2 text-black dark:text-white focus:outline-none ${
          item.href === path ? "!text-primary dark:!text-primary" : null
        } `}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
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
        <div className="bg-white p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block py-2 text-gray-500 hover:bg-gray-200"
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
