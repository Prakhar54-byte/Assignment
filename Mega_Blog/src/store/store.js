import {configureStore} from '@reduxjs/toolkit';
import authSliced from './authSliced';
const store = configureStore({
    reducer:{
        auth:authSliced
    }
});

export default store;