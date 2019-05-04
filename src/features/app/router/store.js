import { createEffect, createStore, createStoreObject } from "effector";

export const changeRoute = createEffect("effect which changes route").use((path, params = "") => {
  const [epic, view, panel] = path.split("/");
  if (typeof epic === "string" && typeof view === "string" && typeof panel === "string") {
    return { epic, view, panel, params };
  }
  throw new Error("Please provide valid path");
});

export const $epic = createStore("epic1");
export const $view = createStore("view1");
export const $panel = createStore("panel1");
const $query = createStore("");
const $params = $query.map(query => query.split("&").reduce((acc, item) => {
  const [key, value] = item.split("=");
  return { ...acc, [key]: value };
}, {}));

$epic.on(changeRoute.done, (_, { result }) => result.epic);
$view.on(changeRoute.done, (_, { result }) => result.view);
$panel.on(changeRoute.done, (_, { result }) => result.panel);
$query.on(changeRoute.done, (_, { result }) => result.query);

export const $router = createStoreObject({
  epic: $epic,
  view: $view,
  panel: $panel,
  params: $params
});
