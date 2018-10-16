import { PostAction } from '../actions/posts';
import { PostState } from '../types/postState';
import { PostActionTypes } from '../constants/posts';

const initialState: PostState = {
    posts: {}
}

export default function posts(state: PostState = initialState, action: PostAction) {
    switch(action.type) {
        case PostActionTypes.GET_POSTS_BY_CATEGORY:

            var filteredPosts: object = {};

            Object.keys(state.posts).forEach(id => {

                if (state.posts[id].category === action.category) {
                    filteredPosts[id] = state.posts[id];
                }
            });

            return filteredPosts;
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
                        voteScore: (action.option === "upVote")? 
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