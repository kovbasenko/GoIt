import React, { Component } from "react";
import ThemeContext from "../context/ThemeContext";

const withTheme = (MyComponent) => {
  return class withTheme extends Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {(theme) => <MyComponent {...this.props} theme={theme} />}
        </ThemeContext.Consumer>
      );
    }
  };
};

export default withTheme;
