import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentList from "./Comment";
import { COMMENTS, YOUTUBE_COMMENT_API, COMMENT_JSON } from "../constant"
import { useEffect, useState } from "react";
import LiveChat from "./LiveChat";


const WatchVideo = () => {
    const [searchParam] = useSearchParams();
    const [commentList, setCommentList] = useState();
    const videoId = searchParam.get('v')
    const src = "https://www.youtube.com/embed/" + videoId+"?autoplay=1";
    const dispatch = useDispatch();

    dispatch(closeMenu());
    useEffect(() => {
        getComments();
    }, [])

    async function getComments() {
        // const response = await fetch(YOUTUBE_COMMENT_API + videoId)
        // const json = await response.json()
        // console.log(json);
        // setCommentList(json.items)

        setCommentList(COMMENT_JSON);
    }

    return (
        <div className="flex">
            <div className="overflow-y-scroll h-screen no-scrollbar ">
                <iframe className="m-1 rounded-2xl p-1" width="900rem" height="500rem" src={src} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <h1>comment </h1>

                <CommentList commentData={commentList} />
            </div>
            <div className=" w-full flex justify-center">
               <LiveChat />
            </div>
        </div>
    )
}

export default WatchVideo;