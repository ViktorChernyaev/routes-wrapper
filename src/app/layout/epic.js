import React from "react";
import * as UI from "@vkontakte/vkui";
import { useStore } from "effector-react";
import Icon28Newsfeed from "@vkontakte/icons/dist/28/newsfeed";
import Icon28Favorite from "@vkontakte/icons/dist/28/favorite";
import Icon24Article from "@vkontakte/icons/dist/24/article";
import { $epic, gotoe1v1p1, gotoe2v3p5, gotoe3v5p9 } from "app/router";

export const Epic = React.memo(({ children }) => {
  const currentEpic = useStore($epic);
  return (
    <UI.Epic
      activeStory={currentEpic}
      tabbar={
        <UI.Tabbar>
          <UI.TabbarItem onClick={gotoe1v1p1} selected={currentEpic === "epic1"} text="epic1">
            <Icon28Newsfeed />
          </UI.TabbarItem>
          <UI.TabbarItem onClick={gotoe2v3p5} selected={currentEpic === "epic2"} text="epic2">
            <Icon28Favorite />
          </UI.TabbarItem>
          <UI.TabbarItem onClick={gotoe3v5p9} selected={currentEpic === "epic3"} text="epic3">
            <Icon24Article />
          </UI.TabbarItem>
        </UI.Tabbar>
      }>
      {children}
    </UI.Epic>
  );
});
