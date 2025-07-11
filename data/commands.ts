import type { Command } from "@/types";

export const COMMANDS: Command[] = [
  { title: "Help", number: 1 },
  { title: "Menu", number: 2 },
  { title: "View", number: 3 },
  { title: "Edit", number: 4 },
  { title: "Copy", number: 5 },
  { title: "RenMov", number: 6 },
  { title: "Mkdir", number: 7 },
  { title: "Delete", number: 8 },
  { title: "PullDn", number: 9 },
  { title: "Quit", number: 10 },
] as const;
