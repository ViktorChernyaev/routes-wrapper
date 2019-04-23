import React from "react";
import * as UI from "@vkontakte/vkui";
import { useStore } from "effector-react";
import { $router, config } from "features/app/router";

export const Panel = React.memo(({ id, children }) => {
  const { params, view, panel } = useStore($router);
  const { title } = config[view][panel];
  return (
    <UI.Panel id={id}>
      <UI.PanelHeader>{title}</UI.PanelHeader>
      {children}
    </UI.Panel>
  );
});
