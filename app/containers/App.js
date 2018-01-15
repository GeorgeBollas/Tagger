// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme();

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

