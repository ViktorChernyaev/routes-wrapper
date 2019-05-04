import React from "react";
import * as UI from "@vkontakte/vkui";
import { gotoe2v3p5, gotoe2v3p6, gotoe2v4p8 } from "features/app/router";

export const E2V4P7 = React.memo(() => (
  <UI.Group>
    <UI.CellButton onClick={gotoe2v3p5}>gotoe2v3p5</UI.CellButton>
    <UI.CellButton onClick={gotoe2v3p6}>gotoe2v3p6</UI.CellButton>
    <UI.CellButton onClick={gotoe2v4p8}>gotoe2v4p8</UI.CellButton>
  </UI.Group>
));

