import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import * as NProgress from 'nprogress';
import '../../../node_modules/nprogress/nprogress.css';

interface Props {
  userInfo: any
}

class Dashboard extends React.Component<Props, any> {

  render() {
    const userInfo = this.props.userInfo.userInfo;

    return (
      <div>
        {userInfo.success && <ul>
          {userInfo.result.permissions.map((p: any, i: number) => {
            return (<li key={i}>id: {p.id}, title: {p.title}, path: {p.path}</li>)
          })}
        </ul>}
      </div>
    );
  }
}

export default Dashboard;
