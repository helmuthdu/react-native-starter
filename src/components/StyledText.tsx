import React from 'react';
import { Text } from 'react-native';

type Props = {
  style: object;
};

export class MonoText extends React.Component<Props> {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
