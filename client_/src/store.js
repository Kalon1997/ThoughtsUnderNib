import {configureStore} from '@reduxjs/toolkit'
import {poemReducer} from './reducers/poem'
import { userReducer } from './reducers/user';

const store = configureStore({
    reducer: {
        myweb: userReducer,
        myweb2: poemReducer,
    }
});
export default store;