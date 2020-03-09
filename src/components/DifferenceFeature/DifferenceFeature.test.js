import React from 'react';

import ReactDOM from 'react-dom';

import DifferenceFeature from './DifferenceFeature';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<DifferenceFeature />, div);

  ReactDOM.unmountComponentAtNode(div);
});