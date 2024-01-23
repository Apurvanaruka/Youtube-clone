import { useState } from "react";
import { timeAgo } from "../utils/helper";

const ImageConponent = ({ url ,size}) => (size ?
    (<img className="rounded-full min-w-9 max-w-9" alt="" src={url} />)
    : (<img className="rounded-full min-w-6 max-w-6" alt="" src={url} />))


const CommentCard = ({ comment ,size}) => {
    return (
        <div className="flex rounded-lg">
            <div className="m-2">
                <ImageConponent url={comment?.authorProfileImageUrl} size={size} />
            </div>
            <div className="p-2">
                <div className="flex items-center space-x-2">
                    <p className="font-medium">{comment?.authorDisplayName} </p>
                    <p className="text-xs">{timeAgo(comment?.publishedAt)}</p>
                </div>
                <p className="mx-2">{comment?.textDisplay}</p>
                <div className="font-medium text-sm m-1 space-x-2">
                    <button className="hover:bg-gray-200 rounded-full p-1">👍 {comment?.likeCount}</button>
                    <button className="hover:bg-gray-200 rounded-full p-1">👎</button>
                    <button className=" hover:bg-gray-200 rounded-full px-2 py-1">Reply</button>
                </div>
            </div>
        </div>
    )
}

const ReplyList = ({ comment, size}) => {
    const [showReplies, setShowReplies] = useState(true);
    const repliesList = comment?.replies?.comments;
    const handleOnClick = () => {
        setShowReplies(!showReplies);
    }
    return (
        <div className="pl-12 text-sm">
            {(showReplies ?
                (<button onClick={handleOnClick} className="text-blue-900 hover:bg-blue-200 rounded-full px-3 py-2 font-bold text-sm">🔻{comment?.snippet?.totalReplyCount + (comment?.snippet?.totalReplyCount === 1 ? " reply" : " replies")} </button>) :
                (repliesList?.map((reply) => {
                    return (
                        <CommentCard key={reply?.id} comment={reply?.snippet} size={size} />
                    )
                })))}
        </div>
    )
}

const Comment = ({ comment }) => {

    return (
        <div className="m-1 ">
            <CommentCard key={comment?.id} comment={comment?.snippet?.topLevelComment?.snippet} size={true} />
            {(comment?.snippet?.totalReplyCount !== 0) && (
                <ReplyList comment={comment} size={false}/>
            )}

        </div>
    )

}


export default Comment;