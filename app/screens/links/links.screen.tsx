import React, { Component } from 'react';
import { Links } from '../../components/links/links.component';

type Props = {
  navigation: any;
};

export default class LinksScreen extends Component<Props> {
  public render() {
    return <Links navigation={this.props.navigation} />;
  }
}
