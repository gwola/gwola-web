import '../css/homePage.css';
import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink, Route, Redirect } from "react-router-dom";
import KnowledgeList from './knowledgeList';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import Test from './test';
import Test1 from './testtwo';
import omit from 'omit.js';


const { Header, Footer, Sider, Content } = Layout;

interface State {
  isShow: boolean;
}

// const Test: React.SFC<any> = () => (
//   <div>test</div>
// );

class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isShow: true
    };
  }

  componentWillMount() {
    console.log(this.props)
    this.getClientWidth();
    window.onresize = () => {
      console.log('屏幕变化了');
      this.getClientWidth();
      // console.log(document.body.clientWidth);
    }
  }

  getClientWidth = () => {    // 获取当前浏览器宽度并设置responsive管理响应式
    const { receiveData } = this.props;
    const clientWidth = document.body.clientWidth;
    console.log(clientWidth);
    //receiveData({ isMobile: clientWidth <= 992 }, 'responsive');
  };


  toggle = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  }


  render() {
    const val = 'name';
    console.log(omit({ name: 'Benjy', age: 18 }, [`${val}`]))
    return (
      <div>
        <Layout>
          <Sider
            trigger={null}
            collapsible={true}
            collapsed={this.state.isShow}
            collapsedWidth="0"
          >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[this.props.location.pathname]}
            >
              <Menu.Item key="/home">
                <NavLink to={"/home"}>
                  <Icon type="link" />
                  <span>list</span>
                </NavLink>
              </Menu.Item>

              <Menu.Item key="/home/test">
                <NavLink to={"/home/test"}>
                  <Icon type="link" />
                  <span>test</span>
                </NavLink>
              </Menu.Item>

              <Menu.Item key="/home/test1">
                <NavLink to={"/home/test1"}>
                  <Icon type="link" />
                  <span>注销测试</span>
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout >
            <Header style={{ background: '#fff' }}>
              <Icon
                className="trigger"
                type={this.state.isShow ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
                style={{ cursor: "pointer" }}
              />
            </Header>
            <Breadcrumb style={{ margin: '10px 0 10px 16px' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item><span className='test'>List</span></Breadcrumb.Item>
            </Breadcrumb>
            <Content className="home-page-content">
              {/* <Route
                exact={true}
                path="/home"
                render={() => <Redirect to="/home/health-knowledge" />}
              /> */}
              <Route exact={true} path="/home" render={() => <KnowledgeList />} />
              <Route exact={true} path="/home/test" render={() => <Test type="primary">Primary</Test>} />
              <Route exact={true} path="/home/test1" render={() => <Test1 />} />
              {/* <Route path="/test" render={() => <Test />} /> */}
            </Content>
          </Layout>
        </Layout>
      </div>

    );
  }
}

export default App;
