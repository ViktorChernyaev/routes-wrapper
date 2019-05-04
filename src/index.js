import "core-js/es6/map";
import "core-js/es6/set";
import "@vkontakte/vkui/dist/vkui.css";
import React from "react";
import ReactDOM from "react-dom";
import connect from "@vkontakte/vkui-connect";
import { Application } from "app/application";
import registerServiceWorker from "./sw";

connect.send("VKWebAppInit", {});
registerServiceWorker();
ReactDOM.render(<Application />, document.getElementById("entry"));
