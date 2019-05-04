import React from "react";
import * as UI from "@vkontakte/vkui";
import { gotoFirstList, gotoFirstShow, gotoSecondKek } from "features/app/router";

export const Secondpek = React.memo(() => (
  <UI.Group>
    <UI.CellButton onClick={gotoSecondKek}>gotoSecondKek</UI.CellButton>
    <UI.CellButton onClick={gotoFirstList}>gotoFirstList</UI.CellButton>
    <UI.CellButton onClick={gotoFirstShow}>gotoFirstShow</UI.CellButton>
  </UI.Group>
));
