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

const tabbify = (tab, index, activeIndex, selectFunc) => {
  return React.cloneElement(tab, {
    isActive: index === activeIndex,
    onSelect: () => selectFunc(index)
  });
};

export const TabBar = props => {
  return (
    <TabsContext.Consumer>
      {({ activeIndex, onSelectTab }) => {
        let indexCount = 0;

        const children = React.Children.map(props.children, child => {
          if (child.type.name === "Tab") {
            const tab = tabbify(child, indexCount, activeIndex, onSelectTab);
            indexCount++;
            return tab;
          } else {
            return child;
          }
        });
        return <div className="tabBar">{children}</div>;
      }}
    </TabsContext.Consumer>
  );
};

export const Tab = props => {
  const { isActive, onSelect, isDisabled } = props;
  return (
    <div className="tab" onClick={isDisabled ? null : onSelect}>
      {props.children}
    </div>
  );
};

export const TabContent = props => {
  return (
    <TabsContext.Consumer>
      {({ activeIndex }) => {
        return <div className="tabContent">{props.children[activeIndex]}</div>;
      }}
    </TabsContext.Consumer>
  );
};

export const TabPanel = props => {
  return props.children;
};
