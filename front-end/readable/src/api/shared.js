import { getAll as getAllCategories } from './categories';
import { getAll as getAllPosts } from './posts';

export const api = "http://localhost:3001";

let token = localStorage.token;
if (!token) {
    token = localStorage.token = Math.random().toString(36).substr(-8)
}

export const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export function getInitialData() {
    return Promise.all([
        getAllCategories(),
        getAllPosts()
    ]).then(([categories, posts]) => ({
        categories,
        posts
    })) 
}