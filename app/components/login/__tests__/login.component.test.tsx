import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer';
import Login from '../login.component';

const onLogin = jest.fn();
const loginForm = React.Component;

it('renders correctly', () => {
  const tree = renderer.create(<Login onLogin={onLogin} loginForm={loginForm} />).toJSON();
  expect(tree).toMatchSnapshot();
});
