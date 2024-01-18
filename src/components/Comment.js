
export const Comment = ({ comment }) => {

    const { authorProfileImageUrl, authorDisplayName, textDisplay } = comment?.snippet?.topLevelComment?.snippet;
    return (
        <div className="m-1">
            <div className="flex rounded-lg">
                <div className="m-2">
                    <img className="rounded-full min-w-8 max-w-8" alt="" src={authorProfileImageUrl} />
                </div>
                <div className="p-2">
                    <h1 className="font-medium">{authorDisplayName}</h1>
                    <p className="mx-2">{textDisplay}</p>
                </div>
            </div>
            {/* <div >
                <div className="border-l-2 ml-3 border-black">
                    <CommentList commentData={comment?.replies} />
                </div>
            </div> */}
        </div>
    )

}



// const CommentList = ({ commentData }) => {
//     return (

//     )
// }

export default Comment;