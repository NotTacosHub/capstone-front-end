import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import BlogItem from './components/blog-items';

ReactDOM.render(
  <App />
  , document.querySelector('.app-wrapper'));

export default function () {
  return (
    <div>
      <BlogItem />
    </div>
  )
}
