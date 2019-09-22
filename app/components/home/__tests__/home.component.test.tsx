import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';
import Home from '../home.component';

const navigation = { navigate: jest.fn() } as any;
const list = ['foo', 'bar'];

it('renders correctly', () => {
  const tree = renderer.create(<Home navigation={navigation} list={list} />).toJSON();
  expect(tree).toMatchSnapshot();
});
