// @flow

import React, { Component } from 'react';
import { withTheme } from 'styled-components';

class Example extends Component<{}> {
  static defaultProps = {};

  render() {
    return <div />;
  }
}

const ExampleWithTheme = withTheme(Example);
