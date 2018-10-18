import { api, headers } from './shared';

export const getByPostId = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, { headers })
        .then(res => res.json())
        .then(data => data)
        //  data: array of comments

export const add =  (comment) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ comment })
    }).then(res => res.json());

export const getById = (commentId) =>
    fetch(`${api}/comments/${commentId}`, { headers })
        .then(res => res.json())
        .then(data => data)
        //  data: a comment object

export const vote = (commentId, option) =>
    fetch(`${api}/comments/${commentId}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ commentId, option })
    }).then(res => res.json());

export const edit = (commentId, timestamp, body) =>
    fetch(`${api}/comments/${commentId}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ timestamp, body })
    }).then(res => res.json());
    //  can only edit timestamp and body

export const deleteById = (commentId) =>
    fetch(`${api}/comments/${commentId}`, {
        method: 'DELETE',
        headers
    }).then(res => res.json());