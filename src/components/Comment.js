
const Comment = ({ comment }) => {
    const { authorProfileImageUrl,authorDisplayName,textDisplay} = comment?.snippet?.topLevelComment?.snippet;
    // console.log(comment?.snippet?.topLevelComment?.snippet);
    console.log(authorProfileImageUrl);

    return (
        <div className="bg-red-300 m-1">
            <div className="flex bg-slate-100 rounded-lg">
                <div className="m-2">
                    <img className="rounded-full w-8" alt="" src={authorProfileImageUrl}/>
                </div>
                <div className="p-2">
                    <h1 className="font-medium">{authorDisplayName}</h1>
                    <p className="mx-2">{textDisplay}</p>
                </div>
            </div>
            <div >
                <div className="border-l-2 ml-3 border-black">
                    <CommentList commentData={comment?.replies} />
                </div>
            </div>
        </div>
    )
}


const comment = {
    name: "prince",
    message: "prince is IAS",
    replies: [{}]
}


const CommentList = ({ commentData }) => {
    // console.log(commentData)
    return (
        <div className=" w-7/12">
        {
            commentData?.map((comment, index) => <Comment key={index} comment={comment} />)
        }
        </div>
    )
}

export default CommentList;