require('expose?$!expose?jQuery!jquery')
require("bootstrap-webpack")

import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import Reducer from './reducer'
import APP from './components/app'

const logger = createLogger()
const store = createStore(Reducer, applyMiddleware(logger))

render(
    <Provider store={store}>
        <APP location='LANDING'/>
    </Provider>,
    document.getElementById('app')
)