import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { reducer } from './reducers/index'

export default createStore(reducer, {
    cakes: [],
    cake: {
        name: '',
        imageUrl: '',
        yumFactor: 1,
        comment: '',
        id: 0
    }

}, applyMiddleware(thunk));