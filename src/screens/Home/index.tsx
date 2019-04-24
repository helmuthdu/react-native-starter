import React from 'react';
import { connect } from 'react-redux';
import Home from './home.screen';
import datas from './data';
import { selectors as loadingSelectors } from '../../stores/modules/loading';

export interface Props {
  navigation: any;
  fetchList: Function;
}
export interface State {
  data: any[];
}
class HomeContainer extends React.Component<Props, State> {
  public state = {
    data: datas
  };

  public render() {
    return <Home navigation={this.props.navigation} list={this.state.data} />;
  }
}

const mapStateToProps = state => ({
  isLoading: loadingSelectors.isLoading(state)
});
export default connect(mapStateToProps)(HomeContainer);
