import { PostAction } from '../actions/posts';
import { IPostState } from '../types/postState';
import { PostActionTypes } from '../constants/posts';

const initialState: IPostState = {
    list: []
}

export default function posts(state: IPostState = initialState, action: PostAction) {
    switch(action.type) {
        case PostActionTypes.GET_POSTS_BY_CATEGORY:
            return {
                ...state, 
                list: [...action.posts]
            }
        case PostActionTypes.GET_ALL_POSTS:
            return {
                ...state, 
                list: [...action.posts]
            };
        case PostActionTypes.ADD_NEW_POST:
            return {
                ...state, 
                list: state.list.concat([action.post])
            };
        case PostActionTypes.VIEW_POST_DETAILS_BY_ID:
            return {
                ...state,
                post: action.post
            };
        case PostActionTypes.VOTE_POST_BY_ID:
            return {
                ...state, 
                list: state.list.map(post => (post.id !== action.post.id)? post : action.post),
                post: action.post
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
                ...state, 
                list: state.list.filter(post => post.id !== action.id)
            }
        default:
            return state;
    }
}