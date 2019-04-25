import React, { Component } from 'react';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { Settings } from '../../components/settings/settings.component';

export interface Props {
  navigation: NavigationScreenProp<NavigationRoute>;
}

export default class SettingsScreen extends Component<Props> {
  public render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <Settings navigation={this.props.navigation} />;
  }
}
