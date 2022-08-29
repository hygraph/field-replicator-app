import * as React from "react";
import { useFormSidebarExtension } from "@graphcms/app-sdk-react";

export function Sidebar() {
  const {
    form,
    extension: { sidebarConfig },
  } = useFormSidebarExtension();
  const { ORIGIN_FIELD, DESTINATION_FIELD } = sidebarConfig || {};
  React.useEffect(() => {
    let cancelSubscription: () => void;
    if (
      typeof ORIGIN_FIELD === "string" &&
      typeof DESTINATION_FIELD === "string"
    ) {
      form
        .subscribeToFieldState(
          ORIGIN_FIELD,
          (state) => {
            console.log({ state });
            form.change(DESTINATION_FIELD, state.value);
          },
          { value: true }
        )
        .then((sub) => (cancelSubscription = sub));
    } else {
      console.error(
        "ORIGIN_FIELD and DESTINATION_FIELD are required for the sidebar element"
      );
    }
    return () => cancelSubscription && cancelSubscription();
  }, [ORIGIN_FIELD, DESTINATION_FIELD]);
  return (
    <div style={{ fontSize: "12px" }}>
      {ORIGIN_FIELD && DESTINATION_FIELD
        ? `Automatically copying values from field '${ORIGIN_FIELD}' to '${DESTINATION_FIELD}'.`
        : "This extensions is not configured."}
    </div>
  );
}
