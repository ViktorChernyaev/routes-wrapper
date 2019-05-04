export const viewIds = {
  first: "first",
  second: "second"
};

export const panelIds = {
  list: "list",
  show: "show",
  kek: "kek",
  pek: "pek",
};

export const config = {
  [viewIds.first]: {
    [panelIds.list]: {
      title: "first list"
    },
    [panelIds.show]: {
      title: "first show"
    },
  },
  [viewIds.second]: {
    [panelIds.kek]: {
      title: "second kek"
    },
    [panelIds.pek]: {
      title: "second pek"
    },
  },
};
