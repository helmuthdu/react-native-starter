import React from 'react';
import { Text } from 'react-native';

type Props = {
  style?: object;
};

export const MonoText = (props: Props) => <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
