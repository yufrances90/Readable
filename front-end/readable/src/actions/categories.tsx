import { CategoryActionTypes } from '../constants/categories';
import ICategory from '../interfaces/ICategory';

export interface IGetAllCategories {
    type: CategoryActionTypes.GET_ALL_CATEGORIES
    categories: ICategory[];
}

export interface IAddNewCategory {
    type: CategoryActionTypes.ADD_NEW_CATEGORY
    category: ICategory
}

export type CategoryAction = IGetAllCategories | IAddNewCategory;

export function getAllCategories(categories: ICategory[]): IGetAllCategories {
    return {
        type: CategoryActionTypes.GET_ALL_CATEGORIES,
        categories
    };
}

export function addNewCategory(category: ICategory): IAddNewCategory {
    return {
        type: CategoryActionTypes.ADD_NEW_CATEGORY,
        category
    };
}