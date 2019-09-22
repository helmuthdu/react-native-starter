import { Root } from 'native-base';
import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import { Platform, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Provider } from 'react-redux';
import AppNavigator from './app/screens';
import createStore from './app/stores';
import getTheme from './app/theme/components';
import { stores as rootStores } from './app/stores/modules';

type Props = {};

type State = Readonly<{
  isLoadingComplete: boolean;
  store: object;
}>;
class App extends Component<Props, State> {
  public state = {
    isLoadingComplete: false,
    store: createStore([...rootStores], () => this.setState({ isLoadingComplete: false }))
  };

  public render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync as any}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <StyleProvider style={getTheme()}>
          <Provider store={this.state.store}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </Provider>
        </StyleProvider>
      );
    }
  }

  private _loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([require('./assets/images/robot-dev.png'), require('./assets/images/robot-prod.png')]),
      Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free to
        // remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
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

export default function Application() {
  return (
    <Root>
      <App />
    </Root>
  );
}
