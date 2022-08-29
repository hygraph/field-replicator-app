import * as React from "react";
import { useApp } from "@graphcms/app-sdk-react";

export function Setup() {
  const { updateInstallation, installation } = useApp();
  if (installation.status === "COMPLETED")
    return <p>Installed, nothing to do here</p>;
  return (
    <button onClick={() => updateInstallation({ status: "COMPLETED" })}>
      Install
    </button>
  );
}
