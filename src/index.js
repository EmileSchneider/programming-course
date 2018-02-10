import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
  document.querySelector('#app'));
registerServiceWorker();


function addScript(url) {
    var s = document.createElement('script');
    s.src = url;
    document.body.appendChild(s);
}
addScript("https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js");
