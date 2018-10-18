export default interface IPost {
    id: string, //  Unique identifier
    timestamp: number,  //  Time created
    title: string,  //  Post title
    body: string,   //  Post body
    author: string,  // Post author
    category: string,   //  Should be one of the categories provided by the server
    voteScore: number,  //  Net votes the post has received (default: 1)
    commentCount: number,
    deleted: boolean    
   //  Flag if post has been 'deleted' (inaccessible by the front end), (default: false)
}