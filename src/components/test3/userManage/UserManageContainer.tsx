import * as React from 'react';
import { connect } from 'react-redux';
import { actionCreators, KnownAction } from '../../../store/userManageStore';
import { AppThunkAction } from '../../../store/index';
import * as NProgress from 'nprogress';
import '../../../../node_modules/nprogress/nprogress.css';
import UserManageList from './userManageList';
import { Button } from 'antd';

interface Props {
  userList: any;
  userManage: () => AppThunkAction<KnownAction>;
}

interface State {
  isShow: boolean;
}

class UserManageContainer extends React.Component<Props, State>{

  constructor(props: any) {
    super(props)
    this.state = {
      isShow: true
    }
  }

  componentDidMount() {
    this.props.userManage();
  }

  onEdit = (text: any, record: any, index: any) => {
    this.onchangePage();
    console.log(index)
  }

  onchangePage = () => {
    this.setState({ isShow: !this.state.isShow })
  }

  render() {
    //console.log(this.props.userList)
    const { isShow } = this.state;
    return (
      <div>
        {isShow &&
          <UserManageList
            onEdit={this.onEdit}
            list={this.props.userList.list}
          />}
        {!isShow && <div>
          这部分是详细信息
          <hr />
          <Button onClick={this.onchangePage}>返回</Button>
        </div>}
      </div>
    )
  }
}

export default connect(
  (state: any) => ({
    userList: state.userManage
  }),
  {
    userManage: actionCreators.userManage
  }
)(UserManageContainer);