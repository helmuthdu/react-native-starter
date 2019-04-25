import React from 'react';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import BlankPage from '../../components/blank-page/blank-page.component';

export interface Props {
  navigation: NavigationScreenProp<NavigationRoute>;
}

export default class BlankPageContainer extends React.Component<Props> {
  public render() {
    return <BlankPage navigation={this.props.navigation} />;
  }
}
