import React from "react";
import { Root, View, Panel } from "features/app/layout";
import { viewIds, panelIds } from "features/app/router";
import { Firstlist } from "features/testViews/firstlist";
import { Firstshow } from "features/testViews/firstshow";
import { Secondkek } from "features/testViews/secondkek";
import { Secondpek } from "features/testViews/secondpek";

export const Application = () => {
  return (
    <Root>
      <View id={viewIds.first}>
        <Panel id={panelIds.list}>
          <Firstlist />
        </Panel>
        <Panel id={panelIds.show}>
          <Firstshow />
        </Panel>
      </View>
      <View id={viewIds.second}>
        <Panel id={panelIds.kek}>
          <Secondkek />
        </Panel>
        <Panel id={panelIds.pek}>
          <Secondpek />
        </Panel>
      </View>
    </Root>
  );
};
