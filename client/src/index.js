import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,


    document.querySelector('#root')

)

serviceWorker.unregister();