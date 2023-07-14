// store.js

import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './reduce-and-action.js'

const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

export default store;
