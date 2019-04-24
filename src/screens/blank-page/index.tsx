import React from 'react';
import BlankPage from './blank-page.screen';
export interface Props {
  navigation: any;
}
export interface State {}
export default class BlankPageContainer extends React.Component<Props, State> {
  render() {
    return <BlankPage navigation={this.props.navigation} />;
  }
}
