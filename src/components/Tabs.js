import React from "react";
import PropTypes from "prop-types";

const TabsContext = React.createContext();

export class Tabs extends React.Component {
  state = {
    activeIndex: this.props.defaultIndex || 0
  };

  selectTabIndex = activeIndex => {
    this.setState({ activeIndex });
  };

  render() {
    const { children } = this.props;
    const { activeIndex } = this.state;

    return (
      <TabsContext.Provider
        value={{ onSelectTab: this.selectTabIndex, activeIndex }}
      >
        <div className="tabs">{children}</div>
      </TabsContext.Provider>
    );
  }
}

export const TabBar = props => {
  return (
    <TabsContext.Consumer>
      {({ activeIndex, onSelectTab }) => {
        const children = React.Children.map(props.children, (child, index) => {
          return React.cloneElement(child, {
            isActive: index === activeIndex,
            onSelect: () => onSelectTab(index)
          });
        });
        return (
          <div
            style={{
              display: "flex",
              margin: "0 6px",
              border: "1px solid #ccc"
            }}
            className="tabBar"
          >
            {children}
          </div>
        );
      }}
    </TabsContext.Consumer>
  );
};

export const Tab = props => {
  const { isActive, onSelect, isDisabled } = props;
  return (
    <div
      style={{
        padding: 6,
        margin: 0,
        borderRight: "1px solid #ccc",
        backgroundColor: isActive ? "#eee" : "#fff"
      }}
      onClick={isDisabled ? null : onSelect}
    >
      {props.children}
    </div>
  );
};

export const TabContent = props => {
  return (
    <TabsContext.Consumer>
      {({ activeIndex }) => {
        return (
          <div
            style={{
              padding: 6,
              margin: "0 6px",
              borderRight: "1px solid #ccc",
              borderBottom: "1px solid #ccc",
              borderLeft: "1px solid #ccc"
            }}
            className="tabContent"
          >
            {props.children[activeIndex]}
          </div>
        );
      }}
    </TabsContext.Consumer>
  );
};

export const TabPanel = props => {
  return props.children;
};
