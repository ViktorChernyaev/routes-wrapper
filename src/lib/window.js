import connect from "@vkontakte/vkui-connect";

const reduceHandler = (acc, item) => {
  const [key, value] = decodeURIComponent(item).split("=");
  return key ? { ...acc, [key]: value } : acc;
};

const promisifyCall = (event, params = {}) => {
  return new Promise((res, rej) => {
    const listener = ({ detail }) => {
      const { data, type } = detail;
      const isSuccess = type === `${event}Result`;
      const isError = type === `${event}Failed`;
      if (isSuccess || isError) {
        connect.unsubscribe(listener);
        return isSuccess ? res(data) : rej(data);
      }
    };
    connect.subscribe(listener);
    connect.send(event, params);
  });
};

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
  return promisifyCall("VKWebAppSetLocation", { location });
};
