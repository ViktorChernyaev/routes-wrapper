import React from "react";
import * as UI from "@vkontakte/vkui";
import { gotoFirstList, gotoFirstShow, gotoSecondPek } from "features/app/router";

export const Secondkek = React.memo(() => (
  <UI.Group>
    <UI.CellButton onClick={gotoSecondPek}>gotoSecondPek</UI.CellButton>
    <UI.CellButton onClick={gotoFirstList}>gotoFirstList</UI.CellButton>
    <UI.CellButton onClick={gotoFirstShow}>gotoFirstShow</UI.CellButton>
  </UI.Group>
));
