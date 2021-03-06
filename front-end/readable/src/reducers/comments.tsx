import { CommentAction } from '../actions/comments';
import { ICommentState } from '../types/commentState';
import { CommentActionTypes } from '../constants/comments';
import { PostActionTypes } from '../constants/posts';

const initialState: ICommentState = {
    list: []
}

export default function comments(state: ICommentState = initialState, action: CommentAction) {
    switch(action.type) {
        case CommentActionTypes.GET_COMMENTS_BY_POST_ID:
            return {
                ...state,
                list: action.comments.filter(comment => comment.parentId === action.postID)
            };
        case CommentActionTypes.ADD_NEW_COMMENT:
            return {
                ...state,
                list: state.list.concat([action.comment])
            };
        case CommentActionTypes.VIEW_COMMENT_DETAILS_BY_ID:
            return {
                ...state,
                comment: action.comment
            };
        case CommentActionTypes.VOTE_COMMENT_BY_ID:
            return {
                ...state,
                list: state.list.map(comment => (comment.id !== action.comment.id)? comment : action.comment )
            };
        case CommentActionTypes.EDIT_COMMENT_DETAILS_BY_ID:
            return {
                ...state,
                list: state.list.map(comment => (comment.id !== action.comment.id)? comment : action.comment)
            };
        case CommentActionTypes.DELETE_COMMENT_BY_ID:
            return {
                ...state,
                list: state.list.filter(comment => comment.id !== action.id)
            }
        case PostActionTypes.DELETE_POST_BY_ID:
            return {
                ...state,
                list: state.list.filter(comment => comment.parentId !== action.id)
            }
        default:
            return state;
    }
}