import React from "react";
import * as UI from "@vkontakte/vkui";
import { gotoe1v1p2, gotoe1v2p3, gotoe1v2p4 } from "features/app/router";

export const E1V1P1 = React.memo(() => (
  <UI.Group>
    <UI.CellButton onClick={gotoe1v1p2}>gotoe1v1p2</UI.CellButton>
    <UI.CellButton onClick={gotoe1v2p3}>gotoe1v2p3</UI.CellButton>
    <UI.CellButton onClick={gotoe1v2p4}>gotoe1v2p4</UI.CellButton>
  </UI.Group>
));

