import * as constants from '../constants/posts';
import IPost from '../interfaces/IPost';

export interface GetPostsByCategory {
    type: constants.GET_POSTS_BY_CATEGORY;
    category: string;
    posts: Array<IPost>;
}

export interface GetAllPosts {
    type: constants.GET_ALL_POSTS;
    posts: Array<IPost>;
}

export interface AddNewPost {
    type: constants.ADD_NEW_POST;
    post: IPost
}

export interface ViewPostDetailsByID {
    type: constants.VIEW_POST_DETAILS_BY_ID;
    post: IPost
}

export interface VotePostByID {
    type: constants.VOTE_POST_BY_ID;
    post: IPost
}

export interface EditPostDetailsByID {
    type: constants.EDIT_POST_DETAILS_BY_ID;
    post: IPost
}

export interface DeletePostByID {
    type: constants.DELETE_POST_BY_ID;
    post: IPost
}

export type PostAction =
    GetPostsByCategory | 
    GetAllPosts | 
    AddNewPost | 
    ViewPostDetailsByID | 
    VotePostByID |
    EditPostDetailsByID |
    DeletePostByID;

export function GetPostsByCategory(category: string, posts: Array<IPost>): GetPostsByCategory {
    return {
        type: constants.GET_POSTS_BY_CATEGORY,
        category,
        posts
    };
}

export function GetAllPosts(posts: Array<IPost>): GetAllPosts {
    return {
        type: constants.GET_ALL_POSTS,
        posts
    };
}

export function AddNewPost(post: IPost): AddNewPost {
    return {
        type: constants.ADD_NEW_POST,
        post
    };
}

export function ViewPostDetailsByID(post: IPost): ViewPostDetailsByID {
    return {
        type: constants.VIEW_POST_DETAILS_BY_ID,
        post
    };
}

export function VotePostByID(post: IPost): VotePostByID {
    return {
        type: constants.VOTE_POST_BY_ID,
        post
    };
}

export function EditPostDetailsByID(post: IPost): EditPostDetailsByID {
    return {
        type: constants.EDIT_POST_DETAILS_BY_ID,
        post
    };
}

export function DeletePostByID(post: IPost): DeletePostByID {
    return {
        type: constants.DELETE_POST_BY_ID,
        post
    };
}