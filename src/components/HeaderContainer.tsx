import * as React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Dropdown, Icon } from 'antd';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const menu = (
  <Menu>
    <Menu.Item>
      <NavLink to={"/test3/111/111"}>111</NavLink>
    </Menu.Item>
    <SubMenu title="Submenu">
      <Menu.Item>
        <NavLink to={"/test3/222/222"}>222</NavLink>
      </Menu.Item>
    </SubMenu>
  </Menu>
);

class HeaderContainer extends React.Component<any, any> {

  render() {
    return (
      <Header>
        {/* <div className="logo">demo</div> */}
        <div className="header-menu">
          <NavLink to={"/test"}>test</NavLink>
          <NavLink to={"/test2"}>test2</NavLink>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link">
              test3<Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </Header>
    )
  }
}


export default HeaderContainer;
