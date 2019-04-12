import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import registerServiceWorker from './sw';

// Init VK App
connect.send('VKWebAppInit', {});

registerServiceWorker();

const App = () => <div>Kek</div>

ReactDOM.render(<App />, document.getElementById('entry'));
