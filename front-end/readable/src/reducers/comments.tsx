import { CommentAction } from '../actions/comments';
import { CommentState } from '../types/commentState';
import {
    GET_COMMENTS_BY_POST_ID,
    ADD_NEW_COMMENT,
    VIEW_COMMENT_DETAILS_BY_ID,
    VOTE_COMMENT_BY_ID,
    EDIT_COMMENT_DETAILS_BY_ID,
    DELETE_COMMENT_BY_ID
} from '../constants/comments';
import { DELETE_POST_BY_ID } from '../constants/posts';
import IComment from '../interfaces/IComment';

export default function comments(state: CommentState, action: CommentAction) {
    switch(action.type) {
        case GET_COMMENTS_BY_POST_ID:

            var filteredComments: object = {};

            Object.keys(state.comments).forEach(id => {
                if (state.comments[id].parentId === action.postID) {
                    filteredComments[id] = state.comments[id];
                }
            });

            return filteredComments;
        case ADD_NEW_COMMENT:
            return {
                comments: {
                    ...state.comments,
                    [action.comment.id]: action.comment
                }
            };
        case VIEW_COMMENT_DETAILS_BY_ID:
            return state.comments[action.id];
        case VOTE_COMMENT_BY_ID:
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
        case EDIT_COMMENT_DETAILS_BY_ID:
            return {
                comments: {
                    ...state.comments,
                    [action.comment.id]: action.comment
                }
            };
        case DELETE_COMMENT_BY_ID:
            return {
                comments: {
                    ...state.comments,
                    [action.id]: {
                        ...state.comments[action.id],
                        deleted: true
                    }
                }
            }
        case DELETE_POST_BY_ID:

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