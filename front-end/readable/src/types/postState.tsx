import IPost from '../interfaces/IPost';

export interface IPostState {
    readonly list: IPost[];
    readonly post?: IPost;
}