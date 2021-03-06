import React from "react";
import { Tabs, TabBar, Tab, TabContent, TabPanel } from "../components/Tabs";
import content from "../data/content";

const Basic = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Basic</h1>
      </div>
      <Tabs defaultIndex={1}>
        <TabBar>
          <Tab>Basic Tab 1</Tab>
          <Tab>Basic Tab 2</Tab>
          <Tab isDisabled>Basic Tab 3</Tab>
          <Tab>Basic Tab 4</Tab>
        </TabBar>

        <TabContent>
          <TabPanel>
            <h3>Basic Content 1</h3>
            {content.one}
          </TabPanel>
          <TabPanel>
            <h3>Basic Content 2</h3>
            {content.two}
          </TabPanel>
          <TabPanel>
            <h3>Basic Content 3</h3>
            {content.three}
          </TabPanel>
          <TabPanel>
            <h3>Basic Content 4</h3>
            {content.four}
          </TabPanel>
        </TabContent>
      </Tabs>
    </React.Fragment>
  );
};

export default Basic;
