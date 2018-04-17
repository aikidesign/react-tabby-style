import React, { Component } from "react";
import { Tabs, TabBar, Tab, TabContent, TabPanel } from "./components/Tabs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Tabby</p>
        <Tabs defaultIndex={1}>
          <TabBar>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
            <Tab>Tab 4</Tab>
          </TabBar>

          <TabContent>
            <TabPanel>I am the content for Tab 1</TabPanel>
            <TabPanel>I am the content for Tab 2</TabPanel>
            <TabPanel>I am the content for Tab 3</TabPanel>
            <TabPanel>I am the content for Tab 4</TabPanel>
          </TabContent>
        </Tabs>
      </div>
    );
  }
}

export default App;
