export type MenuSubItem = {
  title: string;
  shortcut: string;
};

export type MenuItem = {
  title: string;
  items?: MenuSubItem[];
};

export type Command = {
  title: string;
  number: number;
};

export type DirectoryTree = {
  items: string[];
};

export type Column = {
  title: string;
  items?: { name: string; ext?: string }[];
};
