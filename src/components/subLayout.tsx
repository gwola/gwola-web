import * as React from 'react';
import { Layout } from 'antd';
const { Header, Content } = Layout;
import HeaderContainer from './HeaderContainer';

class SubLayout extends React.Component<any, any> {

  render() {
    return (
      <Layout>
        <HeaderContainer />
        <Content>
          {this.props.children}
        </Content>
      </Layout>
    )
  }
}

export default SubLayout;