import { CategoryAction } from '../actions/categories';
import { CategoryState } from '../types/categoryState';
import { GET_ALL_CATEGORIES, ADD_NEW_CATEGORY } from '../constants/categories';

export function categories(state: CategoryState, action: CategoryAction) {
    switch(action.type) {
        case GET_ALL_CATEGORIES:
            return state.categories;
        case ADD_NEW_CATEGORY:
            return state.categories.concat([action.category]);
        default:
            return state;
    }
}