import React from "react";
import { Tabs, TabBar, Tab, TabContent, TabPanel } from "../components/Tabs";
import content from "../data/content";

import styled from "styled-components";
import GithubIcon from "react-icons/lib/go/mark-github";
import InfoIcon from "react-icons/lib/go/info";
import HeartIcon from "react-icons/lib/go/heart";
import GlobeIcon from "react-icons/lib/go/globe";

const StyleTab = styled(Tab)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isActive ? "#333" : "#666")};
  opacity: ${props => (props.isDisabled ? 0.4 : 1)};
  flex: 1;
`;

const StyleTabs = styled(Tabs)`
  background-color: #333;
  min-height: 500px;
  width: 400px;
`;

const StyleTabBar = styled(TabBar)`
  display: flex;
  justify-content: space-between;
  background-color: #666;
`;

const StyleTabContent = styled(TabContent)`
  color: #fefefe;
  font-size: 0.9em;
  line-height: 1.8em;
`;

const Styled = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Using Styled Components</h1>
      </div>
      <StyleTabs defaultIndex={1}>
        <StyleTabBar>
          <StyleTab>
            <GithubIcon color="#fefefe" size={40} />
          </StyleTab>
          <StyleTab>
            <InfoIcon color="#fefefe" size={40} />
          </StyleTab>
          <StyleTab isDisabled>
            <GlobeIcon color="#fefefe" size={40} />
          </StyleTab>
          <StyleTab>
            <HeartIcon color="#fefefe" size={40} />
          </StyleTab>
        </StyleTabBar>

        <StyleTabContent>
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
        </StyleTabContent>
      </StyleTabs>
    </React.Fragment>
  );
};

export default Styled;
