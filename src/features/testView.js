import React, { Fragment } from "react";
import * as UI from "@vkontakte/vkui";
import { useStore } from "effector-react";
import {
  $splittedRoute,
  goBack,
  gotoe1v1p1,
  gotoe1v1p2,
  gotoe1v2p3,
  gotoe1v2p4,
  gotoe2v3p5,
  gotoe2v3p6,
  gotoe2v4p7,
  gotoe2v4p8,
  gotoe3v5p9,
  gotoe3v5p10,
  gotoe3v6p11,
  gotoe3v6p12,
} from "app/router";

export const TestView = React.memo(() => {
  const [epic, view, panel] = useStore($splittedRoute);
  return (
    <Fragment>
      <UI.Group title="кнопка назад">
        <UI.CellButton onClick={goBack}>НАЗАД</UI.CellButton>
      </UI.Group>
      <UI.Group title="кнопки страниц">
        <UI.CellButton
          onClick={gotoe1v1p1}
          level={epic === "epic1" && view === "view1" && panel === "panel1" ? "danger" : "primary"}
        >
          gotoe1v1p1
        </UI.CellButton>
        <UI.CellButton
          onClick={gotoe1v1p2}
          level={epic === "epic1" && view === "view1" && panel === "panel2" ? "danger" : "primary"}
        >
          gotoe1v1p2
        </UI.CellButton>
        <UI.CellButton
          onClick={gotoe1v2p3}
          level={epic === "epic1" && view === "view2" && panel === "panel3" ? "danger" : "primary"}
        >
          gotoe1v2p3
        </UI.CellButton>
        <UI.CellButton
          onClick={gotoe1v2p4}
          level={epic === "epic1" && view === "view2" && panel === "panel4" ? "danger" : "primary"}
        >
          gotoe1v2p4
        </UI.CellButton>
        <UI.CellButton
          onClick={gotoe2v3p5}
          level={epic === "epic2" && view === "view3" && panel === "panel5" ? "danger" : "primary"}
        >
          gotoe2v3p5
        </UI.CellButton>
        <UI.CellButton
          onClick={gotoe2v3p6}
          level={epic === "epic2" && view === "view3" && panel === "panel6" ? "danger" : "primary"}
        >
          gotoe2v3p6
        </UI.CellButton>
        <UI.CellButton
          onClick={gotoe2v4p7}
          level={epic === "epic2" && view === "view4" && panel === "panel7" ? "danger" : "primary"}
        >
          gotoe2v4p7
        </UI.CellButton>
        <UI.CellButton
          onClick={gotoe2v4p8}
          level={epic === "epic2" && view === "view4" && panel === "panel8" ? "danger" : "primary"}
        >
          gotoe2v4p8
        </UI.CellButton>
        <UI.CellButton
          onClick={gotoe3v5p9}
          level={epic === "epic3" && view === "view5" && panel === "panel9" ? "danger" : "primary"}
        >
          gotoe3v5p9
        </UI.CellButton>
        <UI.CellButton
          onClick={gotoe3v5p10}
          level={epic === "epic3" && view === "view5" && panel === "panel10" ? "danger" : "primary"}
        >
          gotoe3v5p10
        </UI.CellButton>
        <UI.CellButton
          onClick={gotoe3v6p11}
          level={epic === "epic3" && view === "view6" && panel === "panel11" ? "danger" : "primary"}
        >
          gotoe3v6p11
        </UI.CellButton>
        <UI.CellButton
          onClick={gotoe3v6p12}
          level={epic === "epic3" && view === "view6" && panel === "panel12" ? "danger" : "primary"}
        >
          gotoe3v6p12
        </UI.CellButton>
      </UI.Group>
    </Fragment>
  );
});

