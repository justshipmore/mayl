"use client";

import { NavLogo } from "@repo/ui";
import { APP_WORKSPACE_PATH } from "@repo/utils/constants";
import { PropsWithChildren } from "react";
import UserDropdown from "../../../components/layout/user-dropdown";

export default function WorkspaceLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="bg-background sticky top-0 flex border-b">
        <header className="container mx-auto flex h-16  items-center gap-4 px-4 md:px-6">
          <nav className="hidden flex-grow flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <NavLogo goToOnClick={APP_WORKSPACE_PATH} />
          </nav>

          <UserDropdown />
        </header>
      </div>
      <main className="bg-muted min-h-screen">{children}</main>
    </div>
  );
}
