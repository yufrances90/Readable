import { CommentActionTypes } from '../constants/comments';
import IComment from '../interfaces/IComment';
import { DeletePostByID } from './posts';

export interface GetCommentsByPostID {
    type: CommentActionTypes.GET_COMMENTS_BY_POST_ID;
    postID: string;
    comments: Array<IComment>;
}

export interface AddNewComment {
    type: CommentActionTypes.ADD_NEW_COMMENT;
    comment: IComment;
}

export interface ViewCommentDetailsByID {
    type: CommentActionTypes.VIEW_COMMENT_DETAILS_BY_ID;
    id: string;
}

export interface VoteCommentByID {
    type: CommentActionTypes.VOTE_COMMENT_BY_ID;
    id: string;
    option: string;
}

export interface EditCommentDetailsByID {
    type: CommentActionTypes.EDIT_COMMENT_DETAILS_BY_ID;
    comment: IComment;
}

export interface DeleteCommentByID {
    type: CommentActionTypes.DELETE_COMMENT_BY_ID;
    id: string;
}

export type CommentAction = 
    GetCommentsByPostID |
    AddNewComment |
    ViewCommentDetailsByID |
    VoteCommentByID |
    EditCommentDetailsByID |
    DeleteCommentByID |
    DeletePostByID;

export function GetCommentsByPostID(
    postID: string, 
    comments: Array<IComment>): GetCommentsByPostID {

    return {
        type: CommentActionTypes.GET_COMMENTS_BY_POST_ID,
        postID,
        comments
    };
}

export function AddNewComment(comment: IComment): AddNewComment {
    return {
        type: CommentActionTypes.ADD_NEW_COMMENT,
        comment
    };
}

export function ViewCommentDetailsByID(id: string): ViewCommentDetailsByID {
    return {
        type: CommentActionTypes.VIEW_COMMENT_DETAILS_BY_ID,
        id
    };
}

export function VoteCommentByID(id: string, option: string): VoteCommentByID {
    return {
        type: CommentActionTypes.VOTE_COMMENT_BY_ID,
        id,
        option
    };
}

export function EditCommentDetailsByID(comment: IComment): EditCommentDetailsByID {
    return {
        type: CommentActionTypes.EDIT_COMMENT_DETAILS_BY_ID,
        comment
    };
}

export function DeleteCommentByID(id: string): DeleteCommentByID {
    return {
        type: CommentActionTypes.DELETE_COMMENT_BY_ID,
        id
    };
}