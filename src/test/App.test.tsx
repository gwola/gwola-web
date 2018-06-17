import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../components/test/testContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
