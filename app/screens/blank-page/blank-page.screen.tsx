import React from 'react';
import BlankPage from '../../components/blank-page/blank-page.component';

export interface Props {
  navigation: any;
}

export default class BlankPageContainer extends React.Component<Props> {
  public render() {
    return <BlankPage navigation={this.props.navigation} />;
  }
}
