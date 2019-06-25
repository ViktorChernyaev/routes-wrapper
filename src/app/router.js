import { createStore, createEvent } from "effector";
import { createBrowserHistory } from "history";
import { setHashParams } from "lib/window";

const history = createBrowserHistory();

export const $path = createStore("epic1/view1/panel1");
export const $params = createStore({});
history.replace({ hash: "epic1/view1/panel1", state: {} });
const routeChanges = createEvent("fires when path changes");
$path.on(routeChanges, (_, { name }) => name);
$params.on(routeChanges, (_, { params }) => params || {});

history.listen((location, action) => {
  const name = location.hash.replace("#", "");
  alert(JSON.stringify({ name, action }));
  routeChanges({ name, params: location.state });
});

routeChanges.watch(({ name, params }) => {
  if (!params) return setHashParams(name);
  const qs = Object.entries(params).map(([name, value]) => `${name}_${value}`).join("/");
  return setHashParams(`${name}/${qs}`);
});

export const $splittedRoute = $path.map(item => item.split("/"));
export const $epic = $splittedRoute.map(item => item[0]);
export const $view = $splittedRoute.map(item => item[1]);
export const $panel = $splittedRoute.map(item => item[2]);


export const goBack = () => {
  history.goBack();
};
export const gotoe1v1p1 = () => {
  history.push({ hash: "epic1/view1/panel1", state: {} });
};
export const gotoe1v1p2 = () => {
  history.push({ hash: "epic1/view1/panel2", state: {} });
};
export const gotoe1v2p3 = () => {
  history.push({ hash: "epic1/view2/panel3", state: {} });
};
export const gotoe1v2p4 = () => {
  history.push({ hash: "epic1/view2/panel4", state: {} });
};
export const gotoe2v3p5 = () => {
  history.push({ hash: "epic2/view3/panel5", state: {} });
};
export const gotoe2v3p6 = () => {
  history.push({ hash: "epic2/view3/panel6", state: {} });
};
export const gotoe2v4p7 = () => {
  history.push({ hash: "epic2/view4/panel7", state: {} });
};
export const gotoe2v4p8 = () => {
  history.push({ hash: "epic2/view4/panel8", state: {} });
};
export const gotoe3v5p9 = () => {
  history.push({ hash: "epic3/view5/panel9", state: {} });
};
export const gotoe3v5p10 = () => {
  history.push({ hash: "epic3/view5/panel10", state: {} });
};
export const gotoe3v6p11 = () => {
  history.push({ hash: "epic3/view6/panel11", state: {} });
};
export const gotoe3v6p12 = () => {
  history.push({ hash: "epic3/view6/panel12", state: {} });
};
