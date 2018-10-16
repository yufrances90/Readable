import { CategoryActionTypes } from '../constants/categories';
import ICategory from '../interfaces/ICategory';

export interface GetAllCategories {
    type: CategoryActionTypes.GET_ALL_CATEGORIES
    categories: Array<ICategory>;
}

export interface AddNewCategory {
    type: CategoryActionTypes.ADD_NEW_CATEGORY
    category: ICategory
}

export type CategoryAction = GetAllCategories | AddNewCategory;

export function GetAllCategories(categories: Array<ICategory>): GetAllCategories {
    return {
        type: CategoryActionTypes.GET_ALL_CATEGORIES,
        categories
    };
}

export function AddNewCategory(category: ICategory): AddNewCategory {
    return {
        type: CategoryActionTypes.ADD_NEW_CATEGORY,
        category
    };
}