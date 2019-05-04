import React from "react";
import * as UI from "@vkontakte/vkui";
import { useStore } from "effector-react";
import { $panel } from "app/router";

export const View = React.memo(({ id, children }) => {
  const currentPanel = useStore($panel);
  return <UI.View activePanel={currentPanel}>{children}</UI.View>
});
