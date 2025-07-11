export default function PreFooter({ text }: { text: string }) {
  return (
    <input
      type="text"
      defaultValue={text}
      aria-label="Command line input"
      role="textbox"
      className="h-[2.125rem] bg-black text-4xl leading-none text-brand-gray outline-0"
    />
  );
}
