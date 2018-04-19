import React from "react";
import { Tabs, TabBar, Tab, TabContent, TabPanel } from "../components/Tabs";

const styles = {
  tabs: {
    display: "grid",
    gridTemplateRows: "60px 500px 60px",
    gridGap: "0px",
    color: "#fefefe"
  },
  top: {
    gridRow: "1/2",
    backgroundColor: "#333"
  },
  content: {
    gridRow: "2/3",
    backgroundColor: "#fff",
    lineHeight: "1.7em",
    color: "#333",
    border: "1px solid #333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    gridRow: "3/4",
    backgroundColor: "#333"
  },
  panel: {
    fontSize: "10em",
    textAlign: "center",
    color: "grey"
  }
};

const BasicBottom = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Tabs Mirrored Top/Bottom</h1>
      </div>
      <Tabs defaultIndex={0} style={styles.tabs}>
        <TabBar style={styles.top}>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab isDisabled>Three (disabled)</Tab>
          <Tab>Four</Tab>
        </TabBar>
        <TabContent style={styles.content}>
          <TabPanel style={styles.panel}>1</TabPanel>
          <TabPanel style={styles.panel}>2</TabPanel>
          <TabPanel style={styles.panel}>3</TabPanel>
          <TabPanel style={styles.panel}>4</TabPanel>
        </TabContent>
        <TabBar style={styles.bottom}>
          <Tab>Bottom One</Tab>
          <Tab>Bottom Two</Tab>
          <Tab isDisabled>Bottom Three (disabled)</Tab>
          <Tab>Bottom Four</Tab>
        </TabBar>
      </Tabs>
    </React.Fragment>
  );
};

export default BasicBottom;
