import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentList from "./Comment";
import { COMMENTS, YOUTUBE_API_KEY, COMMENT_JSON, YOUTUBE_VIDEO_INFO_API, YOUTUBE_VIDEO_INFO } from "../constant"
import { useEffect, useState } from "react";
import LiveChat from "./LiveChat";
import VideoInfo from "./VideoInfo";
import { YOUTUBE_CHANNEL_INFO_API } from "../constant";



const WatchVideo = () => {
    const [searchParam] = useSearchParams();
    const [commentList, setCommentList] = useState();
    const [ videoInfo, setVideoInfo ] = useState();
    const [channelInfo, setChannelInfo] = useState();
    // console.log(channelInfo);

    const videoId = searchParam.get('v')
    const src = "https://www.youtube.com/embed/" + videoId+"?autoplay=1";
    const dispatch = useDispatch();

    dispatch(closeMenu());
    useEffect(() => {
        getVideoInfo();
        getComments();
        getChannelInfo();
    }, [])

    async function getComments() {
        // const response = await fetch(YOUTUBE_COMMENT_API + videoId)
        // const json = await response.json()
        // console.log(json);
        // setCommentList(json.items)

        setCommentList(COMMENT_JSON);
    }

    async function getVideoInfo(){
        // const response = await fetch(YOUTUBE_VIDEO_INFO_API+videoId);
        // const data = await response.json();
        // setVideoInfo(data.items[0]);     
       
        setVideoInfo(YOUTUBE_VIDEO_INFO.items[0]);
    }

    async function getChannelInfo(){
        const response = await fetch(YOUTUBE_CHANNEL_INFO_API+videoInfo?.snippet?.channelId);
        const json = await response.json();
        console.log(json);
        setChannelInfo(json?.items?.[0]);
    }

    // console.log(videoInfo)

    return (
        <div className="flex">
            <div className="overflow-y-scroll h-screen no-scrollbar ">
                <iframe className="m-1 rounded-2xl p-1" width="880rem" height="540rem" src={src} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <VideoInfo info={videoInfo} channelInfo={channelInfo}/>
                <CommentList commentData={commentList} />
            </div>
            <div className=" w-full flex justify-center">
                <LiveChat /> 
            </div>
        </div>
    )
}

export default WatchVideo;