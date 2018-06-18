import * as React from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import history from '../../history';
import * as NProgress from 'nprogress';
import '../../../node_modules/nprogress/nprogress.css';
import { message } from 'antd';
import { UserInfo } from '../../type/userInfo';
import { AppThunkAction } from '../../store/index';
import { actionCreators, KnownAction } from '../../store/userInfoStore';


interface Props {
  userInfo: UserInfo;
}

class DashboardContainer extends React.Component<Props, any>{
  constructor(props: any) {
    super(props);
    this.state = {

    };
  }


  render() {

    return (
      <div>
        <Dashboard userInfo={this.props.userInfo} />
      </div>
    )
  }
}

export default connect(
  (state: any) => ({
    userInfo: state.userInfo
  }),
  {

  }
)(DashboardContainer);
