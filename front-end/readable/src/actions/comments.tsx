import { CommentActionTypes } from '../constants/comments';
import IComment from '../interfaces/IComment';
import { IDeletePostByID } from './posts';

export interface IGetCommentsByPostID {
    type: CommentActionTypes.GET_COMMENTS_BY_POST_ID;
    postID: string;
    comments: IComment[];
}

export interface IAddNewComment {
    type: CommentActionTypes.ADD_NEW_COMMENT;
    comment: IComment;
}

export interface IViewCommentDetailsByID {
    type: CommentActionTypes.VIEW_COMMENT_DETAILS_BY_ID;
    comment: IComment;
}

export interface IVoteCommentByID {
    type: CommentActionTypes.VOTE_COMMENT_BY_ID;
    id: string;
    option: string;
}

export interface IEditCommentDetailsByID {
    type: CommentActionTypes.EDIT_COMMENT_DETAILS_BY_ID;
    comment: IComment;
}

export interface IDeleteCommentByID {
    type: CommentActionTypes.DELETE_COMMENT_BY_ID;
    id: string;
}

export type CommentAction = 
    IGetCommentsByPostID |
    IAddNewComment |
    IViewCommentDetailsByID |
    IVoteCommentByID |
    IEditCommentDetailsByID |
    IDeleteCommentByID |
    IDeletePostByID;

export function getCommentsByPostID(
    postID: string, comments: IComment[]): IGetCommentsByPostID {

    return {
        type: CommentActionTypes.GET_COMMENTS_BY_POST_ID,
        postID,
        comments
    };
}

export function addNewComment(comment: IComment): IAddNewComment {
    return {
        type: CommentActionTypes.ADD_NEW_COMMENT,
        comment
    };
}

export function viewCommentDetailsByID(comment: IComment): IViewCommentDetailsByID {
    return {
        type: CommentActionTypes.VIEW_COMMENT_DETAILS_BY_ID,
        comment
    };
}

export function voteCommentByID(id: string, option: string): IVoteCommentByID {
    return {
        type: CommentActionTypes.VOTE_COMMENT_BY_ID,
        id,
        option
    };
}

export function editCommentDetailsByID(comment: IComment): IEditCommentDetailsByID {
    return {
        type: CommentActionTypes.EDIT_COMMENT_DETAILS_BY_ID,
        comment
    };
}

export function deleteCommentByID(id: string): IDeleteCommentByID {
    return {
        type: CommentActionTypes.DELETE_COMMENT_BY_ID,
        id
    };
}