import React from "react";
import { E1V1P1 } from "features/testViews/e1v1p1";
import { E1V1P2 } from "features/testViews/e1v1p2";
import { E1V2P3 } from "features/testViews/e1v2p3";
import { E1V2P4 } from "features/testViews/e1v2p4";
import { E2V3P5 } from "features/testViews/e2v3p5";
import { E2V3P6 } from "features/testViews/e2v3p6";
import { E2V4P7 } from "features/testViews/e2v4p7";
import { E2V4P8 } from "features/testViews/e2v4p8";
import { Epic, Root, View, Panel } from "./layout";
import { epicIds, viewIds, panelIds } from "./router";

export const Application = () => {
  return (
    <Epic>
      <Root id={epicIds.epic1}>
        <View id={viewIds.view1}>
          <Panel id={panelIds.panel1}><E1V1P1 /></Panel>
          <Panel id={panelIds.panel2}><E1V1P2 /></Panel>
        </View>
        <View id={viewIds.view2}>
          <Panel id={panelIds.panel3}><E1V2P3 /></Panel>
          <Panel id={panelIds.panel4}><E1V2P4 /></Panel>
        </View>
      </Root>
      <Root id={epicIds.epic2}>
        <View id={viewIds.view3}>
          <Panel id={panelIds.panel5}><E2V3P5 /></Panel>
          <Panel id={panelIds.panel6}><E2V3P6 /></Panel>
        </View>
        <View id={viewIds.view4}>
          <Panel id={panelIds.panel7}><E2V4P7 /></Panel>
          <Panel id={panelIds.panel8}><E2V4P8 /></Panel>
        </View>
      </Root>
    </Epic>
  );
};
