import { RECEIVE_DATA } from '../constants/shared';
import ICategory from '../interfaces/ICategory';

export interface IReceiveData {
    type: RECEIVE_DATA;
    categories: ICategory[];
    posts: object;
    comments: object;
}

export type SharedAction = IReceiveData;

export function ReceiveData(
    categories: ICategory[], 
    posts: object, 
    comments: object
): IReceiveData {

    return {
        type: RECEIVE_DATA,
        categories,
        posts,
        comments
    }
}

