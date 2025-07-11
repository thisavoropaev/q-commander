import type { Column } from "@/types";

const COLUMN_1: Column = {
  title: "Name",
  items: [
    { name: "DN" },
    { name: "autoexec", ext: "bat" },
    { name: "command", ext: "com" },
    { name: "config", ext: "sys" },
    { name: "Io", ext: "sys" },
    { name: "11Pro", ext: "sys" },
    { name: "Msdod", ext: "sys" },
  ],
} as const;

const COLUMN_2: Column = {
  title: "Name",
} as const;

const COLUMN_3: Column = {
  title: "Name",
} as const;

export const COLUMNS: Column[] = [COLUMN_1, COLUMN_2, COLUMN_3];
