import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from "react-redux"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/store";
import {persistStore} from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';


let persistor = persistStore(store)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <App/>
                </Router>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

