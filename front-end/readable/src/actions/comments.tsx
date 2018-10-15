import * as constants from '../constants/comments';
import IComment from '../interfaces/IComment';

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
    comment: IComment;
}

export interface VoteCommentByID {
    type: constants.VOTE_COMMENT_BY_ID;
    comment: IComment;
}

export interface EditCommentDetailsByID {
    type: constants.EDIT_COMMENT_DETAILS_BY_ID;
    comment: IComment;
}

export interface DeleteCommentByID {
    type: constants.DELETE_COMMENT_BY_ID;
    comment: IComment;
}

export type CommentAction = 
    GetCommentsByPostID |
    AddNewComment |
    ViewCommentDetailsByID |
    VoteCommentByID |
    EditCommentDetailsByID |
    DeleteCommentByID;

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

export function ViewCommentDetailsByID(comment: IComment): ViewCommentDetailsByID {
    return {
        type: constants.VIEW_COMMENT_DETAILS_BY_ID,
        comment
    };
}

export function VoteCommentByID(comment: IComment): VoteCommentByID {
    return {
        type: constants.VOTE_COMMENT_BY_ID,
        comment
    };
}

export function EditCommentDetailsByID(comment: IComment): EditCommentDetailsByID {
    return {
        type: constants.EDIT_COMMENT_DETAILS_BY_ID,
        comment
    };
}

export function DeleteCommentByID(comment: IComment): DeleteCommentByID {
    return {
        type: constants.DELETE_COMMENT_BY_ID,
        comment
    };
}