import React, { Component } from "react";
import { Tabs, TabBar, Tab, TabContent, TabPanel } from "./components/Tabs";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="App-header">
            <h1 className="App-title">basic</h1>
          </div>
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
      </React.Fragment>
    );
  }
}

export default App;
