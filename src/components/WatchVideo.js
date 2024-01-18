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


const WatchVideo = () => {
    const [commentList, setCommentList] = useState();
    const [searchParam] = useSearchParams();
    const [commentLen, setCommentLen] = useState(0);
    const [nextPageToken, setNextPageToken ] = useState();
    const [hasMore, setHasMore ] = useState(true);

    let videoId = searchParam.get('v')
    const src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    const dispatch = useDispatch();
    dispatch(closeMenu());
    // videoId = "Mggsp7yzyP4"
    // videoId = "jm7TrHiZGK4"
    const [videoInfo, channelInfo] = useWatchVideo(videoId);

    useEffect(() => {
        getComments();
    }, [])

    async function getComments() {
        const response = await fetch(YOUTUBE_COMMENT_API + videoId)
        const json = await response.json()
        setNextPageToken(json?.nextPageToken);
        setCommentList(json.items)
        console.log(json)
        // setCommentList(COMMENT_JSON);
        setCommentLen(commentList?.length);
       
    }
    async function getMoreData() {
        console.log('getMoreData');
        if(nextPageToken != undefined){
            console.log('inside if statements')
            const response = await fetch(YOUTUBE_COMMENT_API + videoId + "&pageToken=" + nextPageToken);
            const json = await response.json()
            console.log(json)
            setNextPageToken(json?.nextPageToken);
            setCommentList(commentList.concat(json?.items))
            // setCommentList(COMMENT_JSON);
            setCommentLen(commentList?.length);
        }else{
            setHasMore(false)
        }
    }

    return (
        <div className="flex h-[687px] overflow-auto " id="watchpage">
            <div className="">
                <iframe className="m-1 rounded-2xl p-1" width="880rem" height="540rem" src={src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <VideoInfo info={videoInfo} channelInfo={channelInfo} />
                    <InfiniteScroll
                        dataLength={commentLen}
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
            <div className=" w-full flex justify-center">
                <LiveChat />
            </div>
        </div>
    )

    // const [data, setData] = useState(Array.from({ length: 20 }))
    // // console.log(data)

    // const fetchData = async () => {
    //     // setData(data.concat(Array.from({ length: 20 })))
    //     setCommentList(commentList.concat(COMMENT_JSON));
    //     setCommentLen(commentList?.length);

    // }


    // return (
    //     <div className="h-96 overflow-auto" id="comment">
    //         <InfiniteScroll
    //             dataLength={commentLen}
    //             next={getMoreData}
    //             hasMore={true} // Replace with a condition based on your data source
    //             loader={<p>Loading...</p>}
    //             endMessage={<p>No more data to load.</p>}
    //             scrollableTarget="comment"
    //         >{
    //                 commentList?.map((comment, index) => <Comment key={index} comment={comment} />)
    //                 // data.map((d, index) => {
    //                 //     return (<div key={index} className='bg-green-300 m-3 p-4'>box =  {index}</div>)
    //                 // })
    //             }
    //         </InfiniteScroll>
    //     </div>

    // );
}

export default WatchVideo;