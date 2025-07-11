"use client";
import { COLUMNS } from "@/data/columns";
import { DIRECTORY_TREE } from "@/data/directory-tree";
import type { Column } from "@/types";
import { ReactNode, useState } from "react";

export default function Main() {
  return (
    <main className="relative flex flex-1 gap-1 overflow-scroll bg-brand-blue p-1 pt-0">
      <Panel title="C:\" bottomText="C:\">
        <Directory items={DIRECTORY_TREE.items} />
      </Panel>
      <Panel title="C:\" bottomText="DN">
        <div className="flex h-full gap-1 bg-brand-light-cyan">
          {COLUMNS.map((col, index) => (
            <PanelColumn key={index} title={col.title} items={col.items} />
          ))}
        </div>
      </Panel>
    </main>
  );
}

function Panel({
  title,
  bottomText,
  children,
}: {
  title: string;
  bottomText: string;
  children?: ReactNode;
}) {
  return (
    <section
      className="flex w-full flex-1 flex-col border-4 border-t-0 border-brand-light-cyan bg-brand-light-cyan"
      aria-label={`File panel ${title}`}
    >
      <div className="flex h-9 w-full flex-col overflow-hidden">
        <div className="mx-auto flex bg-brand-blue px-4 text-4xl font-normal text-brand-light-cyan">
          {title}
        </div>
      </div>
      <div className="flex-1 bg-brand-blue">
        <div className="h-full p-1 pt-0">
          <div className="flex h-full flex-col border-2 border-t-0 border-brand-light-cyan">
            <div className="flex-1">{children}</div>
            <div className="border-t-4 border-brand-light-cyan px-1 py-6 text-3xl leading-none text-brand-light-cyan">
              {bottomText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Directory({ items }: { items: string[] }) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <nav aria-label="Directory navigation">
      <div className="flex flex-col pb-4 pl-7 text-3xl">
        <ul>
          {items.map((item) => (
            <li key={item} className="relative flex">
              <div className="h-9 w-7 border-4 border-t-0 border-r-0 border-brand-light-cyan"></div>
              <button
                type="button"
                aria-label={`Open directory ${item}`}
                aria-pressed={selectedItem === item}
                onClick={() => setSelectedItem(item)}
                className="translate-y-4.5 leading-0 text-brand-light-cyan"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function PanelColumn({ title, items }: Column) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div className="flex-1 bg-brand-blue text-3xl">
      <div className="px-2 text-center text-brand-yellow">{title}</div>

      {items && (
        <nav aria-label={`Files in ${title} column`}>
          <ul>
            {items.map((item) => (
              <li key={item.name} className="px-1">
                <button
                  type="button"
                  aria-label={`Select file ${item.name}${item.ext ? "." + item.ext : ""}`}
                  aria-pressed={selectedItem === item.name}
                  onClick={() => setSelectedItem(item.name)}
                  className="flex w-full justify-between gap-2 leading-none font-normal text-brand-light-cyan hover:bg-brand-light-cyan hover:text-brand-blue"
                >
                  <div>{item.name}</div>
                  {item.ext && <div>{item.ext}</div>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
