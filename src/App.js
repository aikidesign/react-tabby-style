import React, { Component } from "react";
import { Tabs, TabBar, Tab, TabContent, TabPanel } from "./components/Tabs";
import styled from "styled-components";

const STabs = styled(Tabs)`
  border: 1px solid red;
`;
const STabBar = styled(TabBar)`
  border: 1px solid pink;
`;
const STab = styled(Tab)`
  font-size: 35;
  border: 1px solid yellow;
`;
const STabContent = styled(TabContent)`
  border: 1px solid green;
`;
const STabPanel = styled(TabPanel)`
  border: 1px solid blue;
`;

const Header = styled.header`
  border: 1px solid blue;
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Header className="App-header">
            <h1 className="App-title">Unstyled</h1>
          </Header>
          <Tabs defaultIndex={1}>
            <TabBar>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <div>A Section Divider</div>
              <Tab>Tab 3</Tab>
              <Tab isDisabled>Tab 4</Tab>
            </TabBar>

            <TabContent>
              <TabPanel>I am the content for Tab 1</TabPanel>
              <TabPanel>I am the content for Tab 2</TabPanel>
              <TabPanel>I am the content for Tab 3</TabPanel>
              <TabPanel>I am the content for Tab 4</TabPanel>
            </TabContent>
          </Tabs>
        </div>
        <div className="App">
          <div className="App-header">
            <h1 className="App-title">Styled</h1>
          </div>
          <STabs defaultIndex={1}>
            <STabBar>
              <STab>Tab 1</STab>
              <STab>Tab 2</STab>
              <div>A Section Divider</div>
              <STab>Tab 3</STab>
              <STab isDisabled>Tab 4</STab>
            </STabBar>

            <STabContent>
              <STabPanel>I am the content for Tab 1</STabPanel>
              <STabPanel>I am the content for Tab 2</STabPanel>
              <STabPanel>I am the content for Tab 3</STabPanel>
              <STabPanel>I am the content for Tab 4</STabPanel>
            </STabContent>
          </STabs>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
