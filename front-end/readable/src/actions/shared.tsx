import { RECEIVE_DATA } from '../constants/shared';
import ICategory from '../interfaces/ICategory';

export interface ReceiveData {
    type: RECEIVE_DATA;
    categories: Array<ICategory>;
    posts: object;
    comments: object;
}

export type SharedAction = ReceiveData;

export function ReceiveData(
    categories: Array<ICategory>, 
    posts: object,
    comments: object): ReceiveData {

    return {
        type: RECEIVE_DATA,
        categories,
        posts,
        comments
    }
}

