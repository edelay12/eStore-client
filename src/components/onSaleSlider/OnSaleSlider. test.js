import React from 'react';

import ReactDOM from 'react-dom';

import OnSaleSlider from './OnSaleSlider';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<OnSaleSlider />, div);

  ReactDOM.unmountComponentAtNode(div);
});