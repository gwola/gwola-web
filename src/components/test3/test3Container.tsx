import * as React from 'react';
import SubLayout from '../subLayout';
import { Route, Redirect } from "react-router-dom";
import UserManageContainer from './userManage/UserManageContainer';

class Demo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        这是{this.props.match.params.name}页面！
      </div>
    )
  }
}


class Test3Container extends React.Component<any, any> {
  render() {
    return (
      <SubLayout>
        <Route path="/test3/:name/111" component={Demo} />
        <Route path="/test3/:name/222" component={UserManageContainer} />
      </SubLayout>
    )
  }
}

export default Test3Container;