import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/sidebar.component';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationRoute>;
}

export default class SidebarScreen extends Component<Props> {
  public render() {
    return <Sidebar navigation={this.props.navigation} />;
  }
}
