import React from 'react';

import ReactDOM from 'react-dom';

import AdminDash from './adminDash';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<AdminDash product={{picture_main: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DW53qxXfUWco&psig=AOvVaw1m86lzqY6AQpq-m6fZ4SiY&ust=1582146521789000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCg6JyB3OcCFQAAAAAdAAAAABAI"}}/>, div);

  ReactDOM.unmountComponentAtNode(div);
});