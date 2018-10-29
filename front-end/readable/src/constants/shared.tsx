export const RECEIVE_DATA = "RECEIVE_DATA";
export type RECEIVE_DATA = typeof RECEIVE_DATA;

export const enum VoteOptions {
    UP_VOTE = "upVote",
    DOWN_VOTE = "downVote"
}

export const sortMethodMenuItems = [
    {
        key: "none",
        value: "None"
    },
    {
        key: "timestamp",
        value: "Timestamp"
    },
    {
        key: "voteScore",
        value: "Vote Score"
    }
];

export const appName = "Readable";