import { createEffect, createStore, createStoreObject } from "effector";
import { getHashParams, setHashParams } from "lib/window";

function handleRoute(path, query = "") {
  const [epic, view, panel] = path.split("/");
  return { epic, view, panel, query, path };
}

function reduceQuery(acc, item) {
  const [key, value] = item.split("=");
  return key ? { ...acc, [key]: value } : acc;
}

export function initRouter(initialState) {
  const changeRoute = createEffect("effect which changes route").use(handleRoute);

  const $epic = createStore(initialState.epic);
  const $view = createStore(initialState.view);
  const $panel = createStore(initialState.panel);
  const $query = createStore(initialState.query);
  const $params = $query.map(query => query.split("+").reduce(reduceQuery, {}));

  $epic.on(changeRoute.done, (_, { result }) => result.epic);
  $view.on(changeRoute.done, (_, { result }) => result.view);
  $panel.on(changeRoute.done, (_, { result }) => result.panel);
  $query.on(changeRoute.done, (_, { result }) => result.query);

  const $router = createStoreObject({
    epic: $epic,
    view: $view,
    panel: $panel,
    params: $params
  });

  changeRoute.done.watch(({ result }) => setHashParams(`path=${result.path}`));
  const hashRoutePath = getHashParams().path;
  if (hashRoutePath) {
    const [hashPath, hashQuery] = hashRoutePath.split("?");
    changeRoute(hashPath, hashQuery);
  }

  return { changeRoute, $epic, $view, $panel, $router };
}
