import { useState, useEffect } from 'react';
import { YOUTUBE_CHANNEL_INFO_API, YOUTUBE_COMMENT_API, YOUTUBE_VIDEO_INFO_API} from '../constant';
import { YOUTUBE_VIDEO_INFO, COMMENT_JSON  } from '../constant';

const useWatchVideo = (videoId)=>{
    const [videoInfo, setVideoInfo] = useState();
    const [channelInfo, setChannelInfo] = useState();


    useEffect(() => {
        getVideoInfo();
    }, [])

    useEffect(()=>{
        getChannelInfo()
    },[videoInfo])

    async function getVideoInfo() {
        // const response = await fetch(YOUTUBE_VIDEO_INFO_API+ videoId);
        // const data = await response.json();
        // setVideoInfo(data.items[0]);     
        setVideoInfo(YOUTUBE_VIDEO_INFO.items[0]);
    }

    async function getChannelInfo() {
        const response = await fetch(YOUTUBE_CHANNEL_INFO_API + videoInfo?.snippet?.channelId);
        const json = await response.json();
        setChannelInfo(json?.items?.[0]);
    }


    return [videoInfo ,channelInfo ];

}

export default useWatchVideo;