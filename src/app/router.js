import { initRouter } from "lib/router";

export const epicIds = {
  epic1: "epic1",
  epic2: "epic2",
  epic3: "epic3",
}

export const viewIds = {
  view1: "view1",
  view2: "view2",
  view3: "view3",
  view4: "view4",
  view5: "view5",
  view6: "view6",
};

export const panelIds = {
  panel1: "panel1",
  panel2: "panel2",
  panel3: "panel3",
  panel4: "panel4",
  panel5: "panel5",
  panel6: "panel6",
  panel7: "panel7",
  panel8: "panel8",
  panel9: "panel9",
  panel10: "panel10",
  panel11: "panel11",
  panel12: "panel12",
};

const initialState = {
  epic: epicIds.epic1,
  view: viewIds.view1,
  panel: panelIds.panel1,
  query: ""
};
const { changeRoute, $epic, $view, $panel, $router } = initRouter(initialState);
export { $epic, $view, $panel, $router };

export const gotoe1v1p1 = () => changeRoute(`${epicIds.epic1}/${viewIds.view1}/${panelIds.panel1}`);
export const gotoe1v1p2 = () => changeRoute(`${epicIds.epic1}/${viewIds.view1}/${panelIds.panel2}`);
export const gotoe1v2p3 = () => changeRoute(`${epicIds.epic1}/${viewIds.view2}/${panelIds.panel3}`);
export const gotoe1v2p4 = () => changeRoute(`${epicIds.epic1}/${viewIds.view2}/${panelIds.panel4}`);
export const gotoe2v3p5 = () => changeRoute(`${epicIds.epic2}/${viewIds.view3}/${panelIds.panel5}`);
export const gotoe2v3p6 = () => changeRoute(`${epicIds.epic2}/${viewIds.view3}/${panelIds.panel6}`);
export const gotoe2v4p7 = () => changeRoute(`${epicIds.epic2}/${viewIds.view4}/${panelIds.panel7}`);
export const gotoe2v4p8 = () => changeRoute(`${epicIds.epic2}/${viewIds.view4}/${panelIds.panel8}`);
export const gotoe3v5p9 = () => changeRoute(`${epicIds.epic3}/${viewIds.view5}/${panelIds.panel9}`);
export const gotoe3v5p10 = () => changeRoute(`${epicIds.epic3}/${viewIds.view5}/${panelIds.panel10}`);
export const gotoe3v6p11 = () => changeRoute(`${epicIds.epic3}/${viewIds.view6}/${panelIds.panel11}`);
export const gotoe3v6p12 = () => changeRoute(`${epicIds.epic3}/${viewIds.view6}/${panelIds.panel12}`);

export const routes = {
  [epicIds.epic1]: {
    [viewIds.view1]: {
      [panelIds.panel1]: {
        title: "epic1 view1 panel1"
      },
      [panelIds.panel2]: {
        title: "epic1 view1 panel2"
      },
    },
    [viewIds.view2]: {
      [panelIds.panel3]: {
        title: "epic1 view2 panel3"
      },
      [panelIds.panel4]: {
        title: "epic1 view2 panel4"
      },
    },
  },
  [epicIds.epic2]: {
    [viewIds.view3]: {
      [panelIds.panel5]: {
        title: "epic2 view3 panel5"
      },
      [panelIds.panel6]: {
        title: "epic2 view3 panel6"
      },
    },
    [viewIds.view4]: {
      [panelIds.panel7]: {
        title: "epic2 view4 panel7"
      },
      [panelIds.panel8]: {
        title: "epic2 view4 panel8"
      },
    },
  },
  [epicIds.epic3]: {
    [viewIds.view5]: {
      [panelIds.panel9]: {
        title: "epic3 view5 panel9"
      },
      [panelIds.panel10]: {
        title: "epic3 view5 panel10"
      },
    },
    [viewIds.view6]: {
      [panelIds.panel11]: {
        title: "epic3 view6 panel11"
      },
      [panelIds.panel12]: {
        title: "epic3 view6 panel12"
      },
    },
  },
};
