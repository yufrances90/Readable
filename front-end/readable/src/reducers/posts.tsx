import { PostAction } from '../actions/posts';
import { IPostState } from '../types/postState';
import { PostActionTypes } from '../constants/posts';
import { VoteOptions } from '../constants/shared';

const initialState: IPostState = {
    list: []
}

export default function posts(state: IPostState = initialState, action: PostAction) {
    switch(action.type) {
        case PostActionTypes.GET_POSTS_BY_CATEGORY:
            return {
                list: [...action.posts]
            }
        case PostActionTypes.GET_ALL_POSTS:
            return {
                list: [...action.posts]
            };
        case PostActionTypes.ADD_NEW_POST:
            return {
                list: state.list.concat([action.post])
            };
        case PostActionTypes.VIEW_POST_DETAILS_BY_ID:
            return {
                ...state,
                post: action.post
            };
        case PostActionTypes.VOTE_POST_BY_ID:
            return {
                list: {
                    ...state.list,
                    [action.id]: {
                        ...state.list[action.id],
                        voteScore: (action.option === VoteOptions.UP_VOTE)? 
                            state.list[action.id].voteScore + 1 : state.list[action.id].voteScore - 1
                    }
                }
            }
        case PostActionTypes.EDIT_POST_DETAILS_BY_ID:
            return {
                list: {
                    ...state.list,
                    [action.post.id]: action.post
                },
                post: action.post
            }
        case PostActionTypes.DELETE_POST_BY_ID:
            return {
                list: {
                    ...state.list,
                    [action.id]: {
                        ...state.list[action.id],
                        deleted: true
                    }
                }
            }
        default:
            return state;
    }
}