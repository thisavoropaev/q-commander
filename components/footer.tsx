import type { Command } from "@/types";

export default function Footer({ items }: { items: Command[] }) {
  return (
    <footer>
      <nav role="navigation" aria-label="Command buttons">
        <ul className="flex h-9 justify-between overflow-hidden bg-brand-dark-cyan">
          {items.map((item) => (
            <li key={item.number}>
              <CommandItem item={item} />
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

function CommandItem({ item }: { item: Command }) {
  return (
    <button 
      type="button" 
      aria-label={`F${item.number} ${item.title}`}
      className="flex text-4xl"
    >
      <span className="bg-black pl-2 text-brand-gray">{item.number}</span>
      <span className="pr-6 text-black">{item.title}</span>
    </button>
  );
}
