import * as React from 'react';
import { connect } from 'react-redux';
import { actionCreators, KnownAction } from '../store/appStore';
import { AppThunkAction } from '../store/index';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import * as NProgress from 'nprogress';
import '../../node_modules/nprogress/nprogress.css';

interface Props {
  oneTest: () => AppThunkAction<KnownAction>;
}

export type ButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'danger';
export type ButtonShape = 'circle' | 'circle-outline';
export type ButtonSize = 'small' | 'default' | 'large';

export interface BaseButtonProps {
  type?: ButtonType;
  htmlType?: string;
  icon?: string;
  shape?: ButtonShape;
  size?: ButtonSize;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  ghost?: boolean;
}

export type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

class Test extends React.Component<ButtonProps, any> {

  static defaultProps = {
    prefixCls: 'ant-btn',
    loading: false,
    ghost: false,
  };

  componentDidMount() {
    //this.props.oneTest();
    NProgress.start();
    NProgress.done();
  }

  render() {
    //console.log(this.props.state)
    //moment('2018-5-29', dateFormat)
    console.log(this.props.prefixCls)
    return (
      <div>
        <Row gutter={24}>
          <Col className="gutter-row" md={6} lg={8} xl={10}>
            <div>1</div>
          </Col>
          <Col className="gutter-row" md={6} lg={8} xl={10}>
            <div>2</div>
          </Col>
          <Col className="gutter-row" md={6} lg={8} xl={10}>
            <div>3</div>
          </Col>
        </Row>
        {/* 
        <Row gutter={10}>
          <Col className="gutter-row" md={4}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="clear y-center">
                  <div className="pull-left mr-m">
                    <Icon type="heart" className="text-2x text-danger" />
                  </div>
                  <div className="clear">
                    <div className="text-muted">收藏</div>
                    <h2>301</h2>
                  </div>
                </div>
              </Card>
            </div>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="clear y-center">
                  <div className="pull-left mr-m">
                    <Icon type="cloud" className="text-2x" />
                  </div>
                  <div className="clear">
                    <div className="text-muted">云数据</div>
                    <h2>30122</h2>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={4}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="clear y-center">
                  <div className="pull-left mr-m">
                    <Icon type="camera" className="text-2x text-info" />
                  </div>
                  <div className="clear">
                    <div className="text-muted">照片</div>
                    <h2>802</h2>
                  </div>
                </div>
              </Card>
            </div>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="clear y-center">
                  <div className="pull-left mr-m">
                    <Icon type="mail" className="text-2x text-success" />
                  </div>
                  <div className="clear">
                    <div className="text-muted">邮件</div>
                    <h2>102</h2>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={16}>
            <div className="gutter-box">
              <Card bordered={false} className={'no-padding'}>
                // <EchartsProjects /> 
              </Card>
            </div>
          </Col>
        </Row>
      */}
      </div>
    )
  }
}

export default Test
// export default connect(
//   (state: any) => ({

//   }),
//   {
//     oneTest: actionCreators.oneTest
//   }
// )(Test);