import { PostAction } from '../actions/posts';
import { IPostState } from '../types/postState';
import { PostActionTypes } from '../constants/posts';
import { VoteOptions } from '../constants/shared';

const initialState: IPostState = {
    posts: []
}

export default function posts(state: IPostState = initialState, action: PostAction) {
    switch(action.type) {
        case PostActionTypes.GET_POSTS_BY_CATEGORY:
            return state.posts.filter(post => post.category === action.category);
        case PostActionTypes.GET_ALL_POSTS:
            return action.posts;
        case PostActionTypes.ADD_NEW_POST:
            return {
                posts: {
                    ...state.posts,
                    [action.post.id]: action.post
                }
            };
        case PostActionTypes.VIEW_POST_DETAILS_BY_ID:
            return state.posts[action.id];
        case PostActionTypes.VOTE_POST_BY_ID:
            return {
                posts: {
                    ...state.posts,
                    [action.id]: {
                        ...state.posts[action.id],
                        voteScore: (action.option === VoteOptions.UP_VOTE)? 
                            state.posts[action.id].voteScore + 1 : state.posts[action.id].voteScore - 1
                    }
                }
            }
        case PostActionTypes.EDIT_POST_DETAILS_BY_ID:
            return {
                posts: {
                    ...state.posts,
                    [action.post.id]: action.post
                }
            }
        case PostActionTypes.DELETE_POST_BY_ID:
            return {
                posts: {
                    ...state.posts,
                    [action.id]: {
                        ...state.posts[action.id],
                        deleted: true
                    }
                }
            }
        default:
            return state;
    }
}