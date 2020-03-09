import React from 'react';

import ReactDOM from 'react-dom';

import ConfirmDelete from './confirmDelete';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<ConfirmDelete />, div);

  ReactDOM.unmountComponentAtNode(div);
});