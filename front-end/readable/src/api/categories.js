import { api, headers } from './shared';

export const getAll = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories);

export const add = (category) =>
    fetch(`${api}/categories`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ category })
    }).then(res => res.json())