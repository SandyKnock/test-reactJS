import React from "react";
import ReactDOM from 'react-dom'
import {hot} from 'react-hot-loader'
import AppComponent from './components/app.component'
import 'semantic-ui-css/semantic.css'

const render = Component => {
    ReactDOM.render(
            <Component/>,
            document.getElementById('root')
    )
};

render(AppComponent);

hot(module)(render);

// if (module.hot) {
//     module.hot.accept('./components/app.component', () => {
//         const NextRootContainer = require('./components/app.component').default;
//         render(NextRootContainer);
//     })
// }