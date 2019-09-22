import React from 'react';
import 'react-native';
import * as renderer from 'react-test-renderer';
import Sidebar from '../sidebar.component';

const navigation = { navigate: jest.fn() } as any;

it('renders correctly', () => {
  const tree = renderer.create(<Sidebar navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});
