import type { MenuItem } from "@/types";

export const MENU_ITEMS: MenuItem[] = [
  {
    title: "File",
    items: [
      {
        title: "NCD Tree",
        shortcut: "Alt+F4",
      },
      {
        title: "Exit",
        shortcut: "ESC",
      },
    ],
  },
  {
    title: "Disk",
  },
  {
    title: "Commands",
  },
] as const;
