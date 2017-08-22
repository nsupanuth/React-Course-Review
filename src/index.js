import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './store.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Provider store = { store }>
        <Router>  
             <App />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
