import { APP_WORKSPACE_PATH } from "@repo/utils/constants";

export default function () {
  return (
    <>
      <h3>My workspace</h3>
      <p>You don't have any emails created yet!</p>

      <button>Create new email {APP_WORKSPACE_PATH}</button>
    </>
  );
}
