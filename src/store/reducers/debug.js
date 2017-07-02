import { INSERT_TODO, DELETE_TODO, UPDATE_TODO } from './../activeTypeTable.js';

export const address = (state = [], action) => {
	console.log(action)

	switch(action.type) {
		case INSERT_TODO: // 增

			return [...state, action.val]; 
		case DELETE_TODO: // 删

			return [...state].splice(action.index, 1);
		case UPDATE_TODO: // 改

			return [...state].splice(action.index, 1, action.val);
		default:
			return state;
	};
};

export const sex = (state = {}, action) => {

	switch(action.type) {
		case INSERT_TODO: // 增

			return {
				...state,
				...action.val
			}; 
		case DELETE_TODO: // 删
			let newState = {
				...state
			}; 

			return delete newState[action.key];
		case UPDATE_TODO: // 改

			return {
				...state,
				...action.val
			}; 
		default:
			return state;
	};
};