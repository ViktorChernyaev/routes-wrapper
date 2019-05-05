import connect from "@vkontakte/vkui-connect";

const reduceHandler = (acc, item) => {
  const [key, value] = decodeURIComponent(item).split("=");
  return key ? { ...acc, [key]: value } : acc;
}

export const queryParams =
  window.location.search
    .replace("&", "")
    .split("&")
    .reduce(reduceHandler, {});

export const getHashParams = () =>
  window.location.hash
    .replace("#", "")
    .split("&")
    .reduce(reduceHandler, {});

export const setHashParams = (location) => {
  connect.send("VKWebAppSetLocation", { location });
};
