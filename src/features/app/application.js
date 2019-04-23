import React from "react";
import * as UI from "@vkontakte/vkui";
import { useStore } from "effector-react";
import { Root, View, Panel } from "features/app/layout";
import { $router, gotoFirstList, gotoFirstShow, gotoSecondList, gotoSecondShow } from "features/app/router";

export const Application = () => {
  const { view, panel } = useStore($router);
  return (
    <Root>
      <View id="first">
        <Panel id="list">
          <UI.Group>
            <UI.CellButton onClick={gotoFirstShow}>gotoFirstShow</UI.CellButton>
            <UI.CellButton onClick={gotoSecondList}>gotoSecondList</UI.CellButton>
            <UI.CellButton onClick={gotoSecondShow}>gotoSecondShow</UI.CellButton>
          </UI.Group>
        </Panel>
        <Panel id="show">
          <UI.Group>
            <UI.CellButton onClick={gotoFirstList}>gotoFirstList</UI.CellButton>
            <UI.CellButton onClick={gotoSecondList}>gotoSecondList</UI.CellButton>
            <UI.CellButton onClick={gotoSecondShow}>gotoSecondShow</UI.CellButton>
          </UI.Group>
        </Panel>
      </View>
      <View id="second">
        <Panel id="list">
          <UI.Group>
            <UI.CellButton onClick={gotoSecondShow}>gotoSecondShow</UI.CellButton>
            <UI.CellButton onClick={gotoFirstList}>gotoFirstList</UI.CellButton>
            <UI.CellButton onClick={gotoFirstShow}>gotoFirstShow</UI.CellButton>
          </UI.Group>
        </Panel>
        <Panel id="show">
          <UI.Group>
            <UI.CellButton onClick={gotoSecondList}>gotoSecondList</UI.CellButton>
            <UI.CellButton onClick={gotoFirstList}>gotoFirstList</UI.CellButton>
            <UI.CellButton onClick={gotoFirstShow}>gotoFirstShow</UI.CellButton>
          </UI.Group>
        </Panel>
      </View>
    </Root>
  );
};
