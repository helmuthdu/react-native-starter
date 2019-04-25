import React, { Component } from 'react';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import { Links } from '../../components/links/links.component';

type Props = {
  navigation: NavigationScreenProp<NavigationRoute>;
};

export default class LinksScreen extends Component<Props> {
  public render() {
    return <Links navigation={this.props.navigation} />;
  }
}
