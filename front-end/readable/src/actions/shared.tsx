import { RECEIVE_DATA } from '../constants/shared';
import ICategory from '../interfaces/ICategory';
import IPost from '../interfaces/IPost';

export interface IReceiveData {
    type: RECEIVE_DATA;
    categories: ICategory[];
    posts: IPost[];
}

export type SharedAction = IReceiveData;

export function receiveData(
    categories: ICategory[], 
    posts: IPost[]
): IReceiveData {
    return {
        type: RECEIVE_DATA,
        categories,
        posts
    }
}