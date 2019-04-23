import React from "react";
import * as UI from "@vkontakte/vkui";
import { useStore } from "effector-react";
import { $view } from "features/app/router";

export const Root = React.memo(({ children }) => {
  const currentView = useStore($view);
  return <UI.Root activeView={currentView}>{children}</UI.Root>
});
