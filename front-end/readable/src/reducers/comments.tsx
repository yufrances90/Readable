import { CommentAction } from '../actions/comments';
import { ICommentState } from '../types/commentState';
import { CommentActionTypes } from '../constants/comments';
import { PostActionTypes } from '../constants/posts';
import { VoteOptions } from '../constants/shared';

const initialState: ICommentState = {
    list: []
}

export default function comments(state: ICommentState = initialState, action: CommentAction) {
    switch(action.type) {
        case CommentActionTypes.GET_COMMENTS_BY_POST_ID:
            return {
                list: action.comments.filter(comment => comment.parentId === action.postID)
            };
        case CommentActionTypes.ADD_NEW_COMMENT:
            return {
                list: {
                    ...state.list,
                    [action.comment.id]: action.comment
                }
            };
        case CommentActionTypes.VIEW_COMMENT_DETAILS_BY_ID:
            return {
                ...state,
                comment: action.comment
            };
        case CommentActionTypes.VOTE_COMMENT_BY_ID:
            return {
                comments: {
                    ...state.list,
                    [action.id]: {
                        ...state.list[action.id],
                        voteScore: (action.option === VoteOptions.UP_VOTE)? 
                            state.list[action.id].voteScore + 1 : state.list[action.id].voteScore - 1
                    }
                }
            }
        case CommentActionTypes.EDIT_COMMENT_DETAILS_BY_ID:
            return {
                comments: {
                    ...state.list,
                    [action.comment.id]: action.comment
                }
            };
        case CommentActionTypes.DELETE_COMMENT_BY_ID:
            return {
                comments: {
                    ...state.list,
                    [action.id]: {
                        ...state.list[action.id],
                        deleted: true
                    }
                }
            }
        case PostActionTypes.DELETE_POST_BY_ID:
            return state.list.map(comment => {
                if (comment.parentId === action.id) {
                    return {
                        ...comment,
                        parentDeleted: true
                    }
                } 
                return comment;
            })
        default:
            return state;
    }
}