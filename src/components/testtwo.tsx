import * as React from 'react';
import { connect } from 'react-redux';
import { actionCreators, KnownAction } from '../store/appStore';
import { AppThunkAction } from '../store/index';


interface Props {
  twoTest: () => AppThunkAction<KnownAction>;
}

class Test1 extends React.Component<Props, any> {

  componentDidMount() {
    this.props.twoTest();
  }

  render() {
    //console.log(this.props.state)
    //moment('2018-5-29', dateFormat)
    return (
      <div>
        test1
      </div>
    )
  }
}


export default connect(
  (state: any) => ({

  }),
  {
    twoTest: actionCreators.twoTest
  }
)(Test1);