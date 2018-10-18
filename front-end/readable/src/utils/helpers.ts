import ICategory from "../interfaces/ICategory";
import IPost from '../interfaces/IPost';
import { 
    generateTimestamp, 
    generateUID 
} from './utility';
import IComment from '../interfaces/IComment';

export function createNewCategory(name: string, path: string): ICategory {
    return {
        name, 
        path
    };
}

export function createNewPost(
    title: string,
    body: string,
    author: string,
    category: string
): IPost {
    return {
        id: generateUID(),
        timestamp: generateTimestamp(),
        title: title,
        body: body,
        author: author,
        category: category,
        voteScore: 1,
        commentCount: 0,
        deleted: false
    };
}

export function createNewComment(
    parentId: string,
    body: string,
    author: string
): IComment {
    return {
        id: generateUID(),
        parentId: parentId,
        timestamp: generateTimestamp(),
        body: body,
        author: author,
        voteScore: 1,
        deleted: false,
        parentDeleted: false
    };
}