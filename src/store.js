import RootReducer from './Container/Admin Redux/reducer/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'

import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';
const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;