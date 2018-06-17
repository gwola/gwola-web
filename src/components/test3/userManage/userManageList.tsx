import * as React from 'react';
import { Table, Button } from 'antd';

interface Props {
  list: any;
  onEdit: (text: any, record: any, index: any) => void;
}

class UserManageList extends React.Component<Props, any>{

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: any) => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        render: (text: any) => <a>{text}</a>,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (text: any) => <a>{text}</a>,
      },
      {
        title: 'Action',
        key: 'action',
        render: (text: any, record: any, index: any) => {
          return (
            <span>
              <Button type="primary" onClick={() => { this.props.onEdit(text, record, index) }}>查看</Button>
            </span>
          )
        }
      }
    ];

    return (
      <div>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={this.props.list}
          bordered={true}
        />
      </div>
    )
  }
}

export default UserManageList;