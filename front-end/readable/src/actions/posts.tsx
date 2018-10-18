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

export function getPostsByCategory(category: string, posts: IPost[]): IGetPostsByCategory {
    return {
        type: PostActionTypes.GET_POSTS_BY_CATEGORY,
        category,
        posts
    };
}

export function getAllPosts(posts: IPost[]): IGetAllPosts {
    return {
        type: PostActionTypes.GET_ALL_POSTS,
        posts
    };
}

export function addNewPost(post: IPost): IAddNewPost {
    return {
        type: PostActionTypes.ADD_NEW_POST,
        post
    };
}

export function viewPostDetailsByID(id: string): IViewPostDetailsByID {
    return {
        type: PostActionTypes.VIEW_POST_DETAILS_BY_ID,
        id
    };
}

export function votePostByID(id: string, option: string): IVotePostByID {
    return {
        type: PostActionTypes.VOTE_POST_BY_ID,
        id,
        option
    };
}

export function editPostDetailsByID(post: IPost): IEditPostDetailsByID {
    return {
        type: PostActionTypes.EDIT_POST_DETAILS_BY_ID,
        post
    };
}

export function deletePostByID(id: string): IDeletePostByID {
    return {
        type: PostActionTypes.DELETE_POST_BY_ID,
        id
    };
}