import React, { Component } from 'react';
import Sidebar from './sidebar.screen';

export interface Props {
  navigation: any;
}

export interface State {}

export default class SidebarScreen extends Component<Props, State> {
  public render() {
    return <Sidebar navigation={this.props.navigation} />;
  }
}
