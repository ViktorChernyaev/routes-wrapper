import React from "react";
import * as UI from "@vkontakte/vkui";
import { useStore } from "effector-react";
import { $router, routes } from "app/router";

export const Panel = React.memo(({ id, children }) => {
  const { epic, view, panel } = useStore($router);
  const { title } = routes[epic][view][panel];
  return (
    <UI.Panel id={id}>
      <UI.PanelHeader>{title}</UI.PanelHeader>
      {children}
    </UI.Panel>
  );
});
