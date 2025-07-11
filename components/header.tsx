"use client";
import type { MenuItem, MenuSubItem } from "@/types";
import { useEffect, useRef, useState } from "react";

export default function Header({ items }: { items: MenuItem[] }) {
  return (
    <header className="relative z-10 h-9 bg-brand-dark-cyan px-8">
      <nav role="navigation" aria-label="Main menu">
        <ul className="flex items-center">
          {items.map((item) => (
            <li key={item.title}>
              <MenuItem item={item} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function MenuItem({ item }: { item: MenuItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const subItems = item.items;

  const handleClick = () => {
    if (!subItems) return;
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef}>
      <button
        type="button"
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-haspopup={subItems ? "menu" : undefined}
        aria-label={`${item.title} menu`}
        className="px-8 text-4xl leading-none text-black first-letter:text-brand-yellow hover:bg-black hover:text-white"
      >
        {item.title}
      </button>
      {isOpen && <SubMenu items={subItems!} />}
    </div>
  );
}

function SubMenu({ items }: { items: MenuSubItem[] }) {
  return (
    <div className="absolute left-0 w-lg bg-brand-dark-cyan px-1 py-2">
      <ul role="menu" className="border-4 border-black px-1 py-1.5">
        {items.map((item) => (
          <li key={item.title} role="none" className="w-full text-3xl">
            <button
              role="menuitem"
              aria-label={`${item.title} (${item.shortcut})`}
              className="flex w-full justify-between px-2 leading-none hover:bg-black hover:text-white"
            >
              <div className="first-letter:text-brand-yellow">{item.title}</div>
              <div>{item.shortcut}</div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
