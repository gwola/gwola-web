import * as React from 'react';
import { connect } from 'react-redux';
import SubLayout from '../subLayout';

class Test extends React.Component<any, any> {

  render() {
    return (
      <SubLayout>
        test-1
      </SubLayout>
    )
  }
}

//export default Test

export default connect(
  (state: any) => ({
    state: state
  }),
  {

  }
)(Test);
