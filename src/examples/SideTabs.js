import React from "react";
import { Tabs, TabBar, Tab, TabContent, TabPanel } from "../components/Tabs";
import content from "../data/content";

const styles = {
  tabs: { display: "flex", fontSize: "16px" },
  tabBar: {
    flexDirection: "column",
    height: "100%",
    borderLeft: "1px solid #ccc",
    borderRight: "1px solid #ccc",
    borderTop: "1px solid #ccc"
  },
  tab: {
    width: "100px",
    textAlign: "center",
    borderBottom: "1px solid #ccc"
  },
  divider: {
    height: "2px",
    width: "100px",
    backgroundColor: "#333"
  },
  section: {
    color: "#666",
    fontSize: "12px",
    width: "100%",
    padding: "6px 0",
    borderBottom: "1px solid #ccc",
    textAlign: "center"
  }
};

const SideTabs = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Side Tabs</h1>
      </div>
      <Tabs defaultIndex={1} style={styles.tabs}>
        <TabBar style={styles.tabBar}>
          <Tab style={styles.tab}>Basic Tab 1</Tab>
          <Tab style={styles.tab}>Basic Tab 2</Tab>
          <div style={styles.section}>SECTION</div>
          <Tab style={styles.tab} isDisabled>
            Basic Tab 3
          </Tab>
          <Tab style={styles.tab}>Basic Tab 4</Tab>
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

export default SideTabs;
