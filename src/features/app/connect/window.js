function reduceHandler(acc, item) {
  const [key, value] = decodeURIComponent(item.split("="));
  return { ...acc, [key]: value };
}

export const queryParams = window.location.search.replace("&").split("&").reduce(reduceHandler, {});

export const getHashParams = () => window.location.hash.replace("#").split("&").reduce(reduceHandler, {});
