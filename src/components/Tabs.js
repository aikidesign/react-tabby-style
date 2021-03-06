import React from "react";
import styled from "styled-components";

const TabsWrapper = styled.div`
  border: 1px solid #fefefe;
`;

const TabBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TabWrapper = styled.div`
  padding: 1em;
  user-select: none;
  font-family: Arial, Helvetica, sans-serif;
  opacity: ${props => (props.isDisabled ? 0.4 : 1)};
  cursor: ${props => (props.isDisabled ? "normal" : "pointer")};
  font-weight: ${props => (props.isActive ? "bold" : "normal")};
`;

const TabContentWrapper = styled.div`
  padding: 1em;
`;

const TabsContext = React.createContext();

export class Tabs extends React.Component {
  state = {
    activeIndex: this.props.defaultIndex || 0
  };

  selectTabIndex = activeIndex => {
    this.setState({ activeIndex });
  };

  render() {
    const { children, className, style } = this.props;
    const { activeIndex } = this.state;

    return (
      <TabsContext.Provider
        value={{ onSelectTab: this.selectTabIndex, activeIndex }}
      >
        <TabsWrapper style={style} className={`${className} tabs`}>
          {children}
        </TabsWrapper>
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
        return (
          <TabBarWrapper
            style={props.style}
            className={`${props.className} tabBar`}
          >
            {children}
          </TabBarWrapper>
        );
      }}
    </TabsContext.Consumer>
  );
};

export const Tab = ({
  className,
  children,
  isActive,
  onSelect,
  isDisabled,
  style
}) => {
  return (
    <TabWrapper
      style={style}
      isDisabled={isDisabled}
      isActive={isActive}
      className={`${className} tab`}
      onClick={isDisabled ? null : onSelect}
    >
      {children}
    </TabWrapper>
  );
};

export const TabContent = ({ className, children, style }) => {
  return (
    <TabsContext.Consumer>
      {({ activeIndex }) => {
        return (
          <TabContentWrapper
            style={style}
            className={`${className} tabContent`}
          >
            {children[activeIndex]}
          </TabContentWrapper>
        );
      }}
    </TabsContext.Consumer>
  );
};

export const TabPanel = props => {
  // return props.children;
  return <div style={props.style}>{props.children}</div>;
};
