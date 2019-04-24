import { StyleProvider } from 'native-base';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import createStore from './stores';
import getTheme from './theme/components';
import variables from './theme/variables/platform';
import { State as RootState, stores as rootStores } from './stores/modules';

type Props = {
  skipLoadingScreen?: boolean;
};

type State = Readonly<{
  isLoadingComplete: boolean;
  store: object;
}>;

export default class App extends React.Component<Props, State> {
  public state = {
    isLoadingComplete: false,
    store: createStore([...rootStores], () => this.setState({ isLoadingComplete: false }))
  };

  public render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <StyleProvider style={getTheme(variables)}>
          <Provider store={this.state.store}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </Provider>
        </StyleProvider>
      );
    }
  }

  private _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([require('../assets/images/robot-dev.png'), require('../assets/images/robot-prod.png')]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
      })
    ]);
  };

  private _handleLoadingError = (error: Error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  private _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}