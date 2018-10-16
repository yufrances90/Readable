import { PostActionTypes } from '../constants/posts';
import IPost from '../interfaces/IPost';

export interface GetPostsByCategory {
    type: PostActionTypes.GET_POSTS_BY_CATEGORY;
    category: string;
    posts: Array<IPost>;
}

export interface GetAllPosts {
    type: PostActionTypes.GET_ALL_POSTS;
    posts: Array<IPost>;
}

export interface AddNewPost {
    type: PostActionTypes.ADD_NEW_POST;
    post: IPost
}

export interface ViewPostDetailsByID {
    type: PostActionTypes.VIEW_POST_DETAILS_BY_ID;
    id: string
}

export interface VotePostByID {
    type: PostActionTypes.VOTE_POST_BY_ID;
    id: string;
    option: string;
}

export interface EditPostDetailsByID {
    type: PostActionTypes.EDIT_POST_DETAILS_BY_ID;
    post: IPost
}

export interface DeletePostByID {
    type: PostActionTypes.DELETE_POST_BY_ID;
    id: string;
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
        type: PostActionTypes.GET_POSTS_BY_CATEGORY,
        category,
        posts
    };
}

export function GetAllPosts(posts: Array<IPost>): GetAllPosts {
    return {
        type: PostActionTypes.GET_ALL_POSTS,
        posts
    };
}

export function AddNewPost(post: IPost): AddNewPost {
    return {
        type: PostActionTypes.ADD_NEW_POST,
        post
    };
}

export function ViewPostDetailsByID(id: string): ViewPostDetailsByID {
    return {
        type: PostActionTypes.VIEW_POST_DETAILS_BY_ID,
        id
    };
}

export function VotePostByID(id: string, option: string): VotePostByID {
    return {
        type: PostActionTypes.VOTE_POST_BY_ID,
        id,
        option
    };
}

export function EditPostDetailsByID(post: IPost): EditPostDetailsByID {
    return {
        type: PostActionTypes.EDIT_POST_DETAILS_BY_ID,
        post
    };
}

export function DeletePostByID(id: string): DeletePostByID {
    return {
        type: PostActionTypes.DELETE_POST_BY_ID,
        id
    };
}