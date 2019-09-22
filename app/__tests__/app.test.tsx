import React from 'react';
import 'react-native';
import { resetInternalState } from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';
import App from '../../App';

describe('App snapshot', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    resetInternalState();
  });

  it('renders the loading screen', async () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
