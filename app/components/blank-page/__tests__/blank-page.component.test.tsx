import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';
import BlankPage from '../blank-page.component';

const navigation = { state: jest.fn() } as any;

it('renders correctly', () => {
  const tree = renderer.create(<BlankPage navigation={navigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});
