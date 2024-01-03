import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentList from "./Comment";
import { COMMENTS, YOUTUBE_COMMENT_API } from "../constant"
import { useEffect, useState } from "react";


const WatchVideo = () => {
    const [searchParam] = useSearchParams();
    const [ commentList, setCommentList ] = useState();
    const videoId = searchParam.get('v')
    const src = "https://www.youtube.com/embed/" + videoId;
    const dispatch = useDispatch();
    
    dispatch(closeMenu());
    useEffect(()=>{
        getComments();
    },[])

    async function getComments(){
        const response = await fetch(YOUTUBE_COMMENT_API+videoId)
        const json = await response.json()
        setCommentList(json.items)
    }

    return (
        <div className="bg-blue-700 overflow-y-scroll h-screen no-scrollbar">
            <h1>watch page</h1>
            <iframe width="799rem" height="500rem" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h1>comment </h1>

            <CommentList commentData={commentList} />
        </div>
    )
}

export default WatchVideo;