import React from "react";
import * as UI from "@vkontakte/vkui";
import { gotoFirstShow, gotoSecondKek, gotoSecondPek } from "features/app/router";

export const Firstlist = React.memo(() => (
  <UI.Group>
    <UI.CellButton onClick={gotoFirstShow}>gotoFirstShow</UI.CellButton>
    <UI.CellButton onClick={gotoSecondKek}>gotoSecondKek</UI.CellButton>
    <UI.CellButton onClick={gotoSecondPek}>gotoSecondPek</UI.CellButton>
  </UI.Group>
));

