import React from "react";
import { TestView } from "features/testView";
import { Epic, Root, View, Panel } from "./layout";

export const Application = () => {
  return (
    <Epic>
      <Root id="epic1">
        <View id="view1">
          <Panel id="panel1"><TestView /></Panel>
          <Panel id="panel2"><TestView /></Panel>
        </View>
        <View id="view2">
          <Panel id="panel3"><TestView /></Panel>
          <Panel id="panel4"><TestView /></Panel>
        </View>
      </Root>
      <Root id="epic2">
        <View id="view3">
          <Panel id="panel5"><TestView /></Panel>
          <Panel id="panel6"><TestView /></Panel>
        </View>
        <View id="view4">
          <Panel id="panel7"><TestView /></Panel>
          <Panel id="panel8"><TestView /></Panel>
        </View>
      </Root>
      <Root id="epic3">
        <View id="view5">
          <Panel id="panel9"><TestView /></Panel>
          <Panel id="panel10"><TestView /></Panel>
        </View>
        <View id="view6">
          <Panel id="panel11"><TestView /></Panel>
          <Panel id="panel12"><TestView /></Panel>
        </View>
      </Root>
    </Epic>
  );
};
