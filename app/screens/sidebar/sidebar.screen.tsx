import React, { Component } from 'react';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import Sidebar from '../../components/sidebar/sidebar.component';

export interface Props {
  navigation: NavigationScreenProp<NavigationRoute>;
}

export default class SidebarScreen extends Component<Props> {
  public render() {
    return <Sidebar navigation={this.props.navigation} />;
  }
}
