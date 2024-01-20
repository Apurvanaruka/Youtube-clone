import { useState, useEffect } from 'react';
import { YOUTUBE_CHANNEL_INFO_API, YOUTUBE_COMMENT_API, YOUTUBE_VIDEO_INFO_API} from '../constant';
import { YOUTUBE_VIDEO_INFO, COMMENT_JSON  } from '../constant';

const useWatchVideo = (videoId)=>{
    const [videoInfo, setVideoInfo] = useState();
    const [channelInfo, setChannelInfo] = useState();
    const [ isLiveChatVisible, setIsLiveChatVisible ] = useState(false);
    

    useEffect(() => {
        getVideoInfo();
    }, [])

    useEffect(()=>{
        getChannelInfo()
    },[videoInfo])

    async function getVideoInfo() {
        // const response = await fetch(YOUTUBE_VIDEO_INFO_API+ videoId);
        // const data = await response.json();
        const data = YOUTUBE_VIDEO_INFO;
        setVideoInfo(data.items[0]);    
        if(data?.items[0].snippet?.liveBroadcastContent === "live"){
            setIsLiveChatVisible(true);
        }
    }

    async function getChannelInfo() {
        const response = await fetch(YOUTUBE_CHANNEL_INFO_API + videoInfo?.snippet?.channelId);
        const json = await response.json();
        setChannelInfo(json?.items?.[0]);
    }


    return [videoInfo ,channelInfo, isLiveChatVisible ];

}

export default useWatchVideo;