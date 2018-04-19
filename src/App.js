import React, { Component } from "react";

import { Tabs, TabBar, Tab, TabContent, TabPanel } from "./components/Tabs";
import Basic from "./examples/Basic";
import BasicBottom from "./examples/BasicBottom";
import SideTabs from "./examples/SideTabs";
import Styled from "./examples/Styled";

const styles = {
  tabs: {
    fontFamily: "Arial, Helvetica, sans-serif",
    width: "90%",
    border: "1em solid #ddd",
    minHeight: "80vh"
  },
  tabBar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#ddd"
  },
  tab: {
    backgroundColor: "#ddd",
    fontSize: "1.35em",
    textAlign: "center",
    width: "100%"
  },
  tabContent: {
    padding: "20px"
  }
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="App-header">
            <h1 className="App-title">Tabby using React Context</h1>
          </div>
          <Tabs defaultIndex={2} style={styles.tabs}>
            <TabBar style={styles.tabBar}>
              <Tab style={styles.tab}>Basic</Tab>
              <Tab style={styles.tab}>Top/Bottom</Tab>
              <Tab style={styles.tab}>Side Tabs</Tab>
              <Tab style={styles.tab}>Styled Components</Tab>
            </TabBar>

            <TabContent style={styles.tabContent}>
              <TabPanel>
                <Basic />
              </TabPanel>
              <TabPanel>
                <BasicBottom />
              </TabPanel>
              <TabPanel>
                <SideTabs />
              </TabPanel>
              <TabPanel>
                <Styled />
              </TabPanel>
            </TabContent>
          </Tabs>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
