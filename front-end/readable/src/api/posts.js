import { api, headers } from './shared';

export const getByCategory = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
        .then(res => res.json())
        .then(data => data)
        //  data: array of posts

export const getAll = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json())
        .then(data => data);    
        //  data: array of posts

export const add = (post) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ post })
    }).then(res => res.json());

export const get = (postId) =>
    fetch(`${api}/posts/${postId}`, { headers })
        .then(res => res.json())
        .then(data => data)
        //  data: a post object

export const vote = (postId, option) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ postId, option })
    }).then(res => res.json());

export const edit = (postId, title, body) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, body })
    }).then(res => res.json());
    //  can only edit title and body

export const deleteById = (postId, title, body) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'DELETE',
        headers
    }).then(res => res.json());