import React from "react";
import PropTypes from "prop-types";

const TabsContext = React.createContext();

export class Tabs extends React.Component {
  state = {
    tabsContext: {
      activeIndex: 2,
      onSelectTab: this.selectTabIndex
    }
  };

  selectTabIndex = activeIndex => {
    this.setState({ activeIndex });
  };

  render() {
    const { children } = this.props;
    return (
      <TabsContext.Provider value={this.state.tabsContext}>
        <div className="tabs">{children}</div>
      </TabsContext.Provider>
    );
  }
}

export const TabBar = props => {
  const { children } = props;
  return (
    <TabsContext.Consumer>
      {tabsContext => (
        <div className="tabBar">
          {children}
          <div>{JSON.stringify(tabsContext, null, 2)}</div>
        </div>
      )}
    </TabsContext.Consumer>
  );
};
