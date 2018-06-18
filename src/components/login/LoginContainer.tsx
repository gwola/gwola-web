import * as React from 'react';
import { connect } from 'react-redux';
import { AppThunkAction } from '../../store/index';
import { actionCreators, KnownAction } from '../../store/appStore';
import { actionCreators as uiActionCreators, KnownAction as uiKnownAction } from '../../store/userInfoStore';
import NormalLoginForm from './LoginForm';
import history from '../../history';
import { User } from '../../type/user';
import * as NProgress from 'nprogress';
import '../../../node_modules/nprogress/nprogress.css';
import { message } from 'antd';

interface Props {
  user: User;
  login: () => AppThunkAction<KnownAction>;
  getUserInfo: () => AppThunkAction<uiKnownAction>;
}

class LoginContainer extends React.Component<Props, any>{
  constructor(props: any) {
    super(props);
    this.state = {

    };
  }

  componentWillReceiveProps(nextProps: any) {
    const { user } = nextProps;
    if (user.SaveResult.Status === 1) {
      // console.log(user)
      if (user.user.success) {
        sessionStorage.setItem('userToken', user.user.result);
        this.props.getUserInfo();
        history.push('/dashboard');
      } else {
        message.info(user.user.message);
      }
    }
    if (!user.loading) {
      NProgress.done();
    }
  }

  render() {
    return (
      <div>
        <NormalLoginForm login={this.props.login} />
      </div>
    )
  }
}

export default connect(
  (state: any) => ({
    user: state.user
  }),
  {
    login: actionCreators.login,
    getUserInfo: uiActionCreators.getUserInfo
  }
)(LoginContainer);
