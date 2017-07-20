
import { createStore, combineReducers } from 'redux';
import * as debugReduces from './reducers/debug.js';
import routerCont from './router.cont.js';
import { INSERT_TODO, DELETE_TODO, UPDATE_TODO } from './activeTypeTable.js';


// 创建仓库
const { getState, dispatch } = createStore(combineReducers(debugReduces), {
	// 路由配置
	// ...routerCont
});



// const { getState, dispatch } = createStore(combineReducers(debugReduces), {
// 	address: ['初始的']
// });


// function address() {
// 	return {
// 		type: INSERT_TODO,
// 		val: '新增的'
// 	}
// }



// console.log(getState())
// console.log(dispatch(address()))
// console.log(getState())
