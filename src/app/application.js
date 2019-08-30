import React from "react";
import { View, Panel, Group, CellButton } from "@vkontakte/vkui";
import { useStore } from "effector-react";
import { $panel, goBack, gotoPanel2, gotoPanel3, gotoPanel4 } from "./router";

const TestView = React.memo(({ canBack, action, actionText, active }) => {
  return (
    <Group>
      {canBack && <CellButton onClick={goBack}>Назад</CellButton>}
      {!!actionText && <CellButton onClick={action} level={active ? "primary" : "danger"}>{actionText}</CellButton>}
    </Group>
  );
});

export const Application = () => {
  const activePanel = useStore($panel);
  return (
    <View id="view1" activePanel={activePanel} header={false}>
      <Panel id="panel1">
        <TestView
          active={activePanel === "panel1"}
          action={gotoPanel2}
          actionText="go to panel2"
        />
      </Panel>
      <Panel id="panel2">
        <TestView
          active={activePanel === "panel2"}
          action={gotoPanel3}
          actionText="go to panel3"
          canBack={true}
        />
      </Panel>
      <Panel id="panel3">
        <TestView
          active={activePanel === "panel3"}
          action={gotoPanel4}
          actionText="go to panel4"
          canBack={true}
        />
      </Panel>
      <Panel id="panel4">
        <TestView
          active={activePanel === "panel4"}
          canBack={true}
        />
      </Panel>
    </View>
  );
};
