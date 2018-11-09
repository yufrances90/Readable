import IComment from '../interfaces/IComment';

export interface ICommentState {
    readonly list: IComment[];
    readonly post?: IComment;
}