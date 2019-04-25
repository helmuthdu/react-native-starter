import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../../components/home/home.component';
import { selectors as loadingSelectors } from '../../stores/modules/loading';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationRoute>;
  fetchList: Function;
}

export interface State {
  data: string[];
}

class HomeContainer extends Component<Props, State> {
  public state = {
    data: ['React Native Starter Kit', 'React Navigation', 'NativeBase Easy Grid', 'NativeBase', 'CodePush', 'Redux']
  };

  public render() {
    return <Home navigation={this.props.navigation} list={this.state.data} />;
  }
}

const mapStateToProps = (state: any) => ({
  isLoading: loadingSelectors.isLoading(state)
});

export default connect(mapStateToProps)(HomeContainer);
