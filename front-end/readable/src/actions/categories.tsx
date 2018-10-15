import * as constants from '../constants/categories';
import ICategory from '../interfaces/ICategory';

export interface GetAllCategories {
    type: constants.GET_ALL_CATEGORIES;
    categories: Array<ICategory>;
}

export interface AddNewCategory {
    type: constants.ADD_NEW_CATEGORY;
    category: ICategory
}

export type CategoryAction = GetAllCategories | AddNewCategory;

export function GetAllCategories(categories: Array<ICategory>): GetAllCategories {
    return {
        type: constants.GET_ALL_CATEGORIES,
        categories
    };
}

export function AddNewCategory(category: ICategory): AddNewCategory {
    return {
        type: constants.ADD_NEW_CATEGORY,
        category
    };
}