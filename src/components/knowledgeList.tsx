import * as React from 'react';
import { connect } from 'react-redux';
import { actionCreators, KnownAction } from '../store/appStore';
import { Table, Icon, Divider, Button } from 'antd';
import { Knowledge } from '../type/knowledge';
import { AppThunkAction } from '../store/index';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;
import * as moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import locale from 'antd/lib/date-picker/locale/zh_CN';

import * as NProgress from 'nprogress';
import '../../node_modules/nprogress/nprogress.css';

import sb from '../img/sb.png';
import aaa from '../img/sb.png';

interface Props {
  App: Knowledge;
  state: any;
  loading: boolean;
  requestApp: () => AppThunkAction<KnownAction>;
  interfaceTest: () => AppThunkAction<KnownAction>;
}

const dateFormat = 'YYYY年MM月DD日';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => <a>{text}</a>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: any) => {
      //console.log(text.id)
      //console.log(record)
      return (
        <span>
          <Button type="primary">查看</Button>
        </span>
      )
    }
  }
];

class KnowledgeList extends React.Component<Props, any> {

  componentDidMount() {
    this.props.requestApp();
    this.props.interfaceTest();
    NProgress.start();

    if (!this.props.loading) {
      console.log(1)
      NProgress.done();
      console.log(2)
    }
  }

  render() {
    //console.log(this.props.state)
    //moment('2018-5-29', dateFormat)
    return (
      <div>
        <style>
          {`
            
         `}
        </style>

        {!this.props.loading && <div>
          <Icon type="shoubing" title="1" />
          <Icon type="step-backward" style={{ fontSize: 16, color: '#08c' }} />
          <RangePicker
            locale={locale}
            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat}
          />
          <DatePicker locale={locale} defaultValue={moment('2018/08/01', dateFormat)} format={dateFormat} />
          <Table rowKey="id" columns={columns} dataSource={this.props.App.showapi_res_body.list} />
        </div>}

      </div>
    )
  }
}


export default connect(
  (state: any) => ({
    App: state.App.App,
    loading: state.App.loading,
    state: state
  }),
  {
    requestApp: actionCreators.requestApp,
    interfaceTest: actionCreators.interfaceTest
  }
)(KnowledgeList);

