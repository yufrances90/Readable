import { CategoryAction } from '../actions/categories';
import { ICategoryState } from '../types/categoryState';
import { CategoryActionTypes } from '../constants/categories';

const initialState: ICategoryState = {
    categories: []
}

export default function categories(state: ICategoryState = initialState, action: CategoryAction) {
    switch(action.type) {
        case CategoryActionTypes.GET_ALL_CATEGORIES:
            return action.categories;
        case CategoryActionTypes.ADD_NEW_CATEGORY:
            return state.categories.concat([action.category]);
        default:
            return state;
    }
}