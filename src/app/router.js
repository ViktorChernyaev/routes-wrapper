import { createStore, createEvent } from "effector";
import { createBrowserHistory } from "history";
// import { setHashParams } from "lib/window";

const history = createBrowserHistory();
const { search, path, hash } = window.location;

export const $panel = createStore("panel1");
history.replace({ state: { panel: "panel1" }, search, path, hash });

const changeRoute = createEvent("fires when path changes");
$panel.on(changeRoute, (_, { panel }) => panel);

history.listen((location, action) => {
  const { panel } = location.state;
  alert(JSON.stringify({ panel, action }));
  // setHashParams(panel);
  changeRoute({ panel });
});

export const goBack = () => {
  history.goBack();
};
export const gotoPanel2 = () => {
  history.push({ state: { panel: "panel2" }, search, path, hash });
};
export const gotoPanel3 = () => {
  history.push({ state: { panel: "panel3" }, search, path, hash });
};
export const gotoPanel4 = () => {
  history.push({ state: { panel: "panel4" }, search, path, hash });
};
