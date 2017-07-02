
import { createStore, combineReducers } from 'redux';
import * as debugReduces from './reducers/debug.js';
import { INSERT_TODO, DELETE_TODO, UPDATE_TODO } from './activeTypeTable.js';

const { getState, dispatch } = createStore(combineReducers(debugReduces), {
	address: ['初始的']
});


function address() {
	return {
		type: INSERT_TODO,
		val: '新增的'
	}
}



console.log(getState())
console.log(dispatch(address()))
console.log(getState())
