import { createEffect, createStore, createStoreObject } from "effector";

export function initRouter(initialState) {
  const changeRoute = createEffect("effect which changes route").use((path, query = "") => {
    const [epic, view, panel] = path.split("/");
    return { epic, view, panel, query };
  });

  const $epic = createStore(initialState.epic);
  const $view = createStore(initialState.view);
  const $panel = createStore(initialState.panel);
  const $query = createStore(initialState.query);
  const $params = $query.map(query => query.split("&").reduce((acc, item) => {
    const [key, value] = item.split("=");
    return { ...acc, [key]: value };
  }, {}));

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
  return { changeRoute, $epic, $view, $panel, $router };
}
