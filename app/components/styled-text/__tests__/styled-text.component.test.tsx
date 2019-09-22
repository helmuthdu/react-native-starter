import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import { MonoText } from '../styled-text.component';

it('renders correctly', () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
