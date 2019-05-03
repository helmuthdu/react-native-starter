import React from 'react';
import 'react-native';
import { Links } from '../links.component';
// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';

const navigation = { navigate: jest.fn() } as any;

it('renders correctly', () => {
  const tree = renderer.create(<Links navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});
