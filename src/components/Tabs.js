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
    const { children, className } = this.props;
    const { activeIndex } = this.state;

    return (
      <TabsContext.Provider
        value={{ onSelectTab: this.selectTabIndex, activeIndex }}
      >
        <div className={`${className} tabs`}>{children}</div>
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
          // debugger;
          if (
            child.type.name === "Tab" ||
            child.type.displayName === "Styled(Tab)"
          ) {
            const tab = tabbify(child, indexCount, activeIndex, onSelectTab);
            indexCount++;
            return tab;
          } else {
            return child;
          }
        });
        return <div className={`${props.className} tabBar`}>{children}</div>;
      }}
    </TabsContext.Consumer>
  );
};

export const Tab = ({
  className,
  children,
  isActive,
  onSelect,
  isDisabled
}) => {
  return (
    <div className={`${className} tab`} onClick={isDisabled ? null : onSelect}>
      {children}
    </div>
  );
};

export const TabContent = ({ className, children }) => {
  return (
    <TabsContext.Consumer>
      {({ activeIndex }) => {
        return (
          <div className={`${className} tabContent`}>
            {children[activeIndex]}
          </div>
        );
      }}
    </TabsContext.Consumer>
  );
};

export const TabPanel = props => {
  return props.children;
};
