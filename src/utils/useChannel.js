import { useState, useEffect } from "react";
import { YOUTUBE_CHANNEL_INFO_API } from "../constant";

const useChannel = (channelId)=>{

    const [channelInfo, setChannelInfo] = useState();
    useEffect(() => {
        getChannelInfo();
    }, [])
    async function getChannelInfo() {
        const response = await fetch(YOUTUBE_CHANNEL_INFO_API + channelId);
        const json = await response.json();
        setChannelInfo(json?.items?.[0]);
    }
    return channelInfo;
}
export default useChannel;