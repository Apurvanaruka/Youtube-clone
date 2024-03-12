import { useState, useEffect } from 'react';
import { YOUTUBE_CHANNEL_INFO_API, YOUTUBE_VIDEO_INFO_API } from '../constant';

const useWatchVideo = (videoId) => {
    const [videoInfo, setVideoInfo] = useState();
    const [channelInfo, setChannelInfo] = useState();
    const [isLiveChatVisible, setIsLiveChatVisible] = useState(false);
    const accessToken = sessionStorage.getItem('accessToken');
    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
        },
        compress: true
    };


    useEffect(() => {
        getVideoInfo();
    }, [])

    useEffect(() => {
        getChannelInfo()
    }, [videoInfo])

    async function getVideoInfo() {
        fetch(YOUTUBE_VIDEO_INFO_API + videoId, options)
            .then((response) => response.json())
            .then((data) => {
                setVideoInfo(data?.items[0])
                if (data?.items[0].snippet?.liveBroadcastContent === "live") {
                    setIsLiveChatVisible(true);
                }
            })
            .catch((error) => console.error("Error:", error))
    }

    async function getChannelInfo() {

        fetch(YOUTUBE_CHANNEL_INFO_API + videoInfo?.snippet?.channelId, options)
            .then((response) => response.json())
            .then((data) => setChannelInfo(data?.items?.[0]))
            .catch((error) => console.log("Error:", error))
    }


    return [videoInfo, channelInfo, isLiveChatVisible];

}

export default useWatchVideo;