// @flow

import * as React from 'react';
import { withTheme } from 'styled-components';

type Props = {};

class Example extends React.Component<Props> {
  render() {
    return <div />;
  }
}

const ExampleWithTheme = withTheme(Example);
