import { Button } from "@repo/ui";
import { APP_SELECT_TEMPLATE_PATH } from "@repo/utils/constants";
import Link from "next/link";

export default function WorkspaceHeaderSection({ title }: { title?: string }) {
  return (
    <div className=" flex h-16 items-center gap-4 bg-white px-4 py-14 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl">{title || "Workspace"}</h1>
        <Link href={APP_SELECT_TEMPLATE_PATH}>
          <Button>Create Email</Button>
        </Link>
      </div>
    </div>
  );
}
