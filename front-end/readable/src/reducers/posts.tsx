import { PostAction } from '../actions/posts';
import { PostState } from '../types/postState';
import {
    GET_POSTS_BY_CATEGORY,
    GET_ALL_POSTS,
    ADD_NEW_POST,
    VIEW_POST_DETAILS_BY_ID,
    VOTE_POST_BY_ID,
    EDIT_POST_DETAILS_BY_ID,
    DELETE_POST_BY_ID
} from '../constants/posts';

export function posts(state: PostState, action: PostAction) {
    switch(action.type) {
        case GET_POSTS_BY_CATEGORY:

            var filteredPosts: object = {};

            Object.keys(state.posts).forEach(id => {

                if (state.posts[id].category === action.category) {
                    filteredPosts[id] = state.posts[id];
                }
            });

            return filteredPosts;
        case GET_ALL_POSTS:
            return action.posts;
        case ADD_NEW_POST:
            return {
                posts: {
                    ...state.posts,
                    [action.post.id]: action.post
                }
            };
        case VIEW_POST_DETAILS_BY_ID:
            return state.posts[action.id];
        case VOTE_POST_BY_ID:
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
        case EDIT_POST_DETAILS_BY_ID:
            return {
                posts: {
                    ...state.posts,
                    [action.post.id]: action.post
                }
            }
        case DELETE_POST_BY_ID:
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