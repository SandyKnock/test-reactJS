import React, {Component}  from "react";
import {render} from 'react-dom'
import {hot} from 'react-hot-loader'
import AppComponent from './components/app.component'
import 'semantic-ui-css/semantic.css'
import {BrowserRouter} from "react-router-dom"


class Root extends Component{
    render(){
        return (
            <BrowserRouter >
                <AppComponent/>
            </BrowserRouter>
        )
    }
}

render(<Root/>, document.getElementById('root'));

hot(module)(Root);
