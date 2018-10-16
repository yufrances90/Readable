import { PostActionTypes } from '../constants/posts';
import IPost from '../interfaces/IPost';

export interface IGetPostsByCategory {
    type: PostActionTypes.GET_POSTS_BY_CATEGORY;
    category: string;
    posts: IPost[];
}

export interface IGetAllPosts {
    type: PostActionTypes.GET_ALL_POSTS;
    posts: IPost[];
}

export interface IAddNewPost {
    type: PostActionTypes.ADD_NEW_POST;
    post: IPost
}

export interface IViewPostDetailsByID {
    type: PostActionTypes.VIEW_POST_DETAILS_BY_ID;
    id: string
}

export interface IVotePostByID {
    type: PostActionTypes.VOTE_POST_BY_ID;
    id: string;
    option: string;
}

export interface IEditPostDetailsByID {
    type: PostActionTypes.EDIT_POST_DETAILS_BY_ID;
    post: IPost
}

export interface IDeletePostByID {
    type: PostActionTypes.DELETE_POST_BY_ID;
    id: string;
}

export type PostAction =
    IGetPostsByCategory | 
    IGetAllPosts | 
    IAddNewPost | 
    IViewPostDetailsByID | 
    IVotePostByID |
    IEditPostDetailsByID |
    IDeletePostByID;

export function GetPostsByCategory(category: string, posts: IPost[]): IGetPostsByCategory {
    return {
        type: PostActionTypes.GET_POSTS_BY_CATEGORY,
        category,
        posts
    };
}

export function GetAllPosts(posts: IPost[]): IGetAllPosts {
    return {
        type: PostActionTypes.GET_ALL_POSTS,
        posts
    };
}

export function AddNewPost(post: IPost): IAddNewPost {
    return {
        type: PostActionTypes.ADD_NEW_POST,
        post
    };
}

export function ViewPostDetailsByID(id: string): IViewPostDetailsByID {
    return {
        type: PostActionTypes.VIEW_POST_DETAILS_BY_ID,
        id
    };
}

export function VotePostByID(id: string, option: string): IVotePostByID {
    return {
        type: PostActionTypes.VOTE_POST_BY_ID,
        id,
        option
    };
}

export function EditPostDetailsByID(post: IPost): IEditPostDetailsByID {
    return {
        type: PostActionTypes.EDIT_POST_DETAILS_BY_ID,
        post
    };
}

export function DeletePostByID(id: string): IDeletePostByID {
    return {
        type: PostActionTypes.DELETE_POST_BY_ID,
        id
    };
}