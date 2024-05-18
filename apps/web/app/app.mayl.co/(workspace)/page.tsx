"use client";

import EmptyWorkspace from "../../../components/workspace/empty-workspace";
import WorkspaceEmailList from "../../../components/workspace/workspace-email-list";
import WorkspaceHeaderSection from "../../../components/workspace/workspace-header-section";

export default function () {
  const isEmpty = false;
  return (
    <>
      {isEmpty ? (
        <EmptyWorkspace />
      ) : (
        <>
          <WorkspaceHeaderSection />
          <WorkspaceEmailList />
        </>
      )}
    </>
  );
}
