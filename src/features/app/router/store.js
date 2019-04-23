import { createEffect, createStore, createStoreObject } from "effector";

export const changeRoute = createEffect("effect which changes route").use((path, params = "") => {
  const [view, panel] = path.split("/");
  if (typeof view === "string" && typeof panel === "string") {
    return { view, panel, params };
  }
  throw new Error("Please provide valid path");
});

export const $view = createStore("first");
export const $panel = createStore("list");
const $query = createStore("");
const $params = $query.map(query => query.split("&").reduce((acc, item) => {
  const [key, value] = item.split("=");
  return { ...acc, [key]: value };
}, {}));

$view.on(changeRoute.done, (_, { result }) => result.view);
$panel.on(changeRoute.done, (_, { result }) => result.panel);
$query.on(changeRoute.done, (_, { result }) => result.query);

export const $router = createStoreObject({
  view: $view,
  panel: $panel,
  params: $params
});
