import { combineReducers } from '@reduxjs/toolkit';
import frontReducers from './front';
const rootReducer = combineReducers({ ...frontReducers });
export default rootReducer;
