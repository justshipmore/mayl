import { Button, MainContainer } from "@repo/ui";
import { APP_SELECT_TEMPLATE_PATH } from "@repo/utils/constants";
import Image from "next/image";
import Link from "next/link";

export default function EmptyWorkspace() {
  return (
    <div className=" flex h-screen justify-center bg-white">
      <MainContainer className="flex flex-col items-center rounded-lg bg-white py-10 text-center">
        <div className="mb-8 flex flex-col gap-2">
          <Image
            src="/empty-workspace.svg"
            width={400}
            height={400}
            alt="Avatar"
            className="overflow-hidden rounded-full"
          />
          <p className="text-muted-foreground text-xl">
            You don't have any emails created yet!
          </p>
        </div>
        <Link href={APP_SELECT_TEMPLATE_PATH}>
          <Button>Create your first email</Button>
        </Link>
      </MainContainer>
    </div>
  );
}
