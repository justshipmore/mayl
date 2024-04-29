import { APP_SELECT_TEMPLATE_PATH } from "@repo/utils/constants";
import Link from "next/link";

export default function () {
  return (
    <>
      <h3>My workspace</h3>
      <p>You don't have any emails created yet!</p>

      <Link href={APP_SELECT_TEMPLATE_PATH}>Create new email</Link>
    </>
  );
}
