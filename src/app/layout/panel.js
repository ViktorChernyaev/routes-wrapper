import React from "react";
import * as UI from "@vkontakte/vkui";

export const Panel = React.memo(({ id, children }) => {
  return (
    <UI.Panel id={id}>
      <UI.PanelHeader>Заголовок</UI.PanelHeader>
      {children}
    </UI.Panel>
  );
});
