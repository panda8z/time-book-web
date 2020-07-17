import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import {BlogList} from './components';

render(
    <Provider store={store}>
        <BlogList />
    </Provider>,
    document.querySelector('#root')
)