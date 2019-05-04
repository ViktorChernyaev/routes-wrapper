import React from "react";
import * as UI from "@vkontakte/vkui";
import { gotoFirstList, gotoSecondKek, gotoSecondPek } from "features/app/router";

export const Firstshow = React.memo(() => (
  <UI.Group>
    <UI.CellButton onClick={gotoFirstList}>gotoFirstList</UI.CellButton>
    <UI.CellButton onClick={gotoSecondKek}>gotoSecondKek</UI.CellButton>
    <UI.CellButton onClick={gotoSecondPek}>gotoSecondPek</UI.CellButton>
  </UI.Group>
));
