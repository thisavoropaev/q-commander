import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import PreFooter from "@/components/pre-footer";

import { COMMANDS } from "@/data/commands";
import { MENU_ITEMS } from "@/data/menu";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header items={MENU_ITEMS} />
      <Main />
      <PreFooter text="C:\>" />
      <Footer items={COMMANDS} />
    </div>
  );
}
