
export const Comment = ({ comment }) => {
    const { authorProfileImageUrl, authorDisplayName, textDisplay } = comment?.snippet?.topLevelComment?.snippet;
    const repliesList = comment?.replies?.comments
    console.log(repliesList)
    return (
        <div className="m-1 bg-gray-200">
            <div className="flex rounded-lg">
                <div className="m-2">
                    <img className="rounded-full min-w-8 max-w-8" alt="" src={authorProfileImageUrl} />
                </div>
                <div className="p-2">
                    <h1 className="font-medium">{authorDisplayName}</h1>
                    <p className="mx-2">{textDisplay}</p>
                </div>
            </div>
            <div>
                {
                    repliesList?.map((reply) => {
                        return (
                            <div className="flex rounded-lg ml-10">
                                <div className="m-2">
                                    <img className="rounded-full min-w-8 max-w-8" alt="" src={reply?.snippet?.authorProfileImageUrl} />
                                </div>
                                <div className="p-2">
                                    <h1 className="font-medium">{reply?.snippet?.authorDisplayName}</h1>
                                    <p className="mx-2">{reply.snippet?.textDisplay}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}



// const CommentList = ({ commentData }) => {
//     return (

//     )
// }

export default Comment;