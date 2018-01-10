import React, {Component} from "react";
import {render} from 'react-dom'
import {hot} from 'react-hot-loader'
import AppComponent from './components/app.component'
import 'semantic-ui-css/semantic.css'
import {BrowserRouter} from "react-router-dom"
import {Provider} from 'react-redux'
import {createStore} from 'redux'

function test(state = [], action) {
    return state
}

const store = createStore(test);

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <AppComponent/>
                </BrowserRouter>
            </Provider>
        )
    }
}

render(<Root/>, document.getElementById('root'));

hot(module)(Root);
