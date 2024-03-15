import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import Comment from "./Comment";
import { COMMENTS, YOUTUBE_API_KEY, COMMENT_JSON, YOUTUBE_VIDEO_INFO_API, YOUTUBE_VIDEO_INFO, YOUTUBE_COMMENT_API } from "../constant"
import { useEffect, useState } from "react";
import LiveChat from "./LiveChat";
import VideoInfo from "./VideoInfo";
import { YOUTUBE_CHANNEL_INFO_API } from "../constant";
import useChannel from "../utils/useChannel";
import useWatchVideo from "../utils/useWatchVideo";
import InfiniteScroll from 'react-infinite-scroll-component';
import RecommendationVideo from "./RecommendationVideo";


const WatchVideo = () => {
    const [commentList, setCommentList] = useState([]);
    const [searchParam] = useSearchParams();
    const [nextPageToken, setNextPageToken ] = useState();
    const [hasMore, setHasMore ] = useState(true);

    const videoId = searchParam.get('v')
    const src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    const dispatch = useDispatch();
    dispatch(closeMenu());
    const [videoInfo, channelInfo , isLiveChatVisible ] = useWatchVideo(videoId);
    const accessToken = sessionStorage.getItem('accessToken');
    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
        },
        compress: true
    };


    useEffect(() => {
        getComments();
    }, [])

    async function getComments() {
        fetch(YOUTUBE_COMMENT_API + videoId, options)
        .then((response)=>response.json())
        .then((data)=>{
            setNextPageToken(data?.nextPageToken);
            setCommentList(data?.items)
        })
        .catch((error)=>console.error("Error:",error))
       
    }
    async function getMoreData() {
        if(nextPageToken != undefined){
            fetch(YOUTUBE_COMMENT_API + videoId + "&pageToken=" + nextPageToken, options)
            .then((response)=>response.json())
            .then((data)=>{
                setNextPageToken(data?.nextPageToken);
                setCommentList(commentList.concat(data?.items))

            })
            .catch((error)=>console.error("Error:",error))
         
        }else{
            setHasMore(false)
        }
    }

    return (
        <div className="flex h-[687px] overflow-auto " id="watchpage">
            <div className="w-11/12">
                <iframe className="m-1 rounded-2xl p-1" width="880rem" height="540rem" src={src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <VideoInfo info={videoInfo} channelInfo={channelInfo} />
                    <InfiniteScroll
                        dataLength={commentList?.length}
                        next={getMoreData}
                        hasMore={hasMore} // Replace with a condition based on your data source
                        loader={<p className="flex justify-center">Loading...</p>}
                        endMessage={<div className="flex justify-center">No More Comments</div>}
                        scrollableTarget="watchpage">
                        {
                            commentList?.map((comment, index) => <Comment key={index} comment={comment} />)
                        }
                    </InfiniteScroll>
            
            </div>
            <div className="pt-2 w-full flex flex-col justify-center">
               { isLiveChatVisible && <LiveChat />}
               { <RecommendationVideo info={videoInfo} /> }
            </div>
        </div>
    )
}

export default WatchVideo;