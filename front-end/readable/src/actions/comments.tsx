import * as constants from '../constants/comments';
import IComment from '../interfaces/IComment';
import { DeletePostByID } from './posts';

export interface GetCommentsByPostID {
    type: constants.GET_COMMENTS_BY_POST_ID;
    postID: string;
    comments: Array<IComment>;
}

export interface AddNewComment {
    type: constants.ADD_NEW_COMMENT;
    comment: IComment;
}

export interface ViewCommentDetailsByID {
    type: constants.VIEW_COMMENT_DETAILS_BY_ID;
    id: string;
}

export interface VoteCommentByID {
    type: constants.VOTE_COMMENT_BY_ID;
    id: string;
    option: string;
}

export interface EditCommentDetailsByID {
    type: constants.EDIT_COMMENT_DETAILS_BY_ID;
    comment: IComment;
}

export interface DeleteCommentByID {
    type: constants.DELETE_COMMENT_BY_ID;
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
        type: constants.GET_COMMENTS_BY_POST_ID,
        postID,
        comments
    };
}

export function AddNewComment(comment: IComment): AddNewComment {
    return {
        type: constants.ADD_NEW_COMMENT,
        comment
    };
}

export function ViewCommentDetailsByID(id: string): ViewCommentDetailsByID {
    return {
        type: constants.VIEW_COMMENT_DETAILS_BY_ID,
        id
    };
}

export function VoteCommentByID(id: string, option: string): VoteCommentByID {
    return {
        type: constants.VOTE_COMMENT_BY_ID,
        id,
        option
    };
}

export function EditCommentDetailsByID(comment: IComment): EditCommentDetailsByID {
    return {
        type: constants.EDIT_COMMENT_DETAILS_BY_ID,
        comment
    };
}

export function DeleteCommentByID(id: string): DeleteCommentByID {
    return {
        type: constants.DELETE_COMMENT_BY_ID,
        id
    };
}