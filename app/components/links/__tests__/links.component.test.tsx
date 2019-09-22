import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';
import { Links } from '../links.component';

const navigation = { navigate: jest.fn() } as any;

it('renders correctly', () => {
  const tree = renderer.create(<Links navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});
