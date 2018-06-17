import * as React from 'react';
import { connect } from 'react-redux';
import { AppThunkAction } from '../../store/index';
import { actionCreators, KnownAction } from '../../store/appStore';
import NormalLoginForm from './LoginForm';
import history from '../../history';
import { User } from '../../type/user';
import * as NProgress from 'nprogress';
import '../../../node_modules/nprogress/nprogress.css';
import { message } from 'antd';

interface Props {
  user: User;
  login: () => AppThunkAction<KnownAction>;
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
      console.log(user)
      if (user.user.success) {
        sessionStorage.setItem('userToken', user.user.result);
        history.push('/test');
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
    login: actionCreators.login
  }
)(LoginContainer);
