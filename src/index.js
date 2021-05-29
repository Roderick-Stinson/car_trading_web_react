import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import {createStore} from "redux";
import tokenReducer from "./reducer/TokenReducer";

const store = createStore(tokenReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
