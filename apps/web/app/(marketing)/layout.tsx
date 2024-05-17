import { Navbar } from "@repo/ui";
import { PropsWithChildren } from "react";

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
