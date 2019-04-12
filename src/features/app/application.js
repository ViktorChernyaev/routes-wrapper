import React from "react";
import * as UI from "@vkontakte/vkui";
import { useStore } from "effector-react";
import { $router, gotoFirstList, gotoFirstShow, gotoSecondList, gotoSecondShow } from "features/app/router";

export const Application = () => {
  const { view, panel } = useStore($router);
  const firstView = view === "first" ? { activePanel: panel } : {};
  const secondView = view === "second" ? { activePanel: panel } : {};
  return (
    <UI.Root activeView={view} >
      <UI.View id="first" {...firstView}>
        <UI.Panel id="list">
          <UI.PanelHeader>first list</UI.PanelHeader>
            <UI.Group>
              <UI.CellButton onClick={gotoFirstShow}>gotoFirstShow</UI.CellButton>
              <UI.CellButton onClick={gotoSecondList}>gotoSecondList</UI.CellButton>
              <UI.CellButton onClick={gotoSecondShow}>gotoSecondShow</UI.CellButton>
            </UI.Group>
        </UI.Panel>
        <UI.Panel id="show">
          <UI.PanelHeader>first show</UI.PanelHeader>
            <UI.Group>
              <UI.CellButton onClick={gotoFirstList}>gotoFirstList</UI.CellButton>
              <UI.CellButton onClick={gotoSecondList}>gotoSecondList</UI.CellButton>
              <UI.CellButton onClick={gotoSecondShow}>gotoSecondShow</UI.CellButton>
            </UI.Group>
          </UI.Panel>
      </UI.View>
      <UI.View id="second" {...secondView}>
        <UI.Panel id="list">
          <UI.PanelHeader>second list</UI.PanelHeader>
            <UI.Group>
              <UI.CellButton onClick={gotoSecondShow}>gotoSecondShow</UI.CellButton>
              <UI.CellButton onClick={gotoFirstList}>gotoFirstList</UI.CellButton>
              <UI.CellButton onClick={gotoFirstShow}>gotoFirstShow</UI.CellButton>
            </UI.Group>
        </UI.Panel>
        <UI.Panel id="show">
          <UI.PanelHeader>second show</UI.PanelHeader>
            <UI.Group>
              <UI.CellButton onClick={gotoSecondList}>gotoSecondList</UI.CellButton>
              <UI.CellButton onClick={gotoFirstList}>gotoFirstList</UI.CellButton>
              <UI.CellButton onClick={gotoFirstShow}>gotoFirstShow</UI.CellButton>
            </UI.Group>
          </UI.Panel>
      </UI.View>
    </UI.Root>
  );
};
