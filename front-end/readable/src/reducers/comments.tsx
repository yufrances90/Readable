import { CommentAction } from '../actions/comments';
import { CommentState } from '../types/commentState';
import { CommentActionTypes } from '../constants/comments';
import { PostActionTypes } from '../constants/posts';
import IComment from '../interfaces/IComment';

const initialState: CommentState = {
    comments: {}
}

export default function comments(state: CommentState = initialState, action: CommentAction) {
    switch(action.type) {
        case CommentActionTypes.GET_COMMENTS_BY_POST_ID:

            var filteredComments: object = {};

            Object.keys(state.comments).forEach(id => {
                if (state.comments[id].parentId === action.postID) {
                    filteredComments[id] = state.comments[id];
                }
            });

            return filteredComments;
        case CommentActionTypes.ADD_NEW_COMMENT:
            return {
                comments: {
                    ...state.comments,
                    [action.comment.id]: action.comment
                }
            };
        case CommentActionTypes.VIEW_COMMENT_DETAILS_BY_ID:
            return state.comments[action.id];
        case CommentActionTypes.VOTE_COMMENT_BY_ID:
            return {
                comments: {
                    ...state.comments,
                    [action.id]: {
                        ...state.comments[action.id],
                        voteScore: (action.option === "upVote")? 
                            state.comments[action.id].voteScore + 1 : state.comments[action.id].voteScore - 1
                    }
                }
            }
        case CommentActionTypes.EDIT_COMMENT_DETAILS_BY_ID:
            return {
                comments: {
                    ...state.comments,
                    [action.comment.id]: action.comment
                }
            };
        case CommentActionTypes.DELETE_COMMENT_BY_ID:
            return {
                comments: {
                    ...state.comments,
                    [action.id]: {
                        ...state.comments[action.id],
                        deleted: true
                    }
                }
            }
        case PostActionTypes.DELETE_POST_BY_ID:

            var updatedComments: object = {};
            
            return Object.keys(state.comments).forEach(id => {

                var comment:IComment = state.comments[id];

                const newComment: IComment = (comment.parentId === action.id)? 
                {
                    ...comment,
                    parentDeleted: true
                } : comment;

                updatedComments[id] = newComment;
            })
        default:
            return state;
    }
}