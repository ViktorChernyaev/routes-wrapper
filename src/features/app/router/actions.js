import { changeRoute } from "./store";

export const gotoFirstList = () => changeRoute("first/list");
export const gotoFirstShow = () => changeRoute("first/show");
export const gotoSecondList = () => changeRoute("second/list");
export const gotoSecondShow = () => changeRoute("second/show");
