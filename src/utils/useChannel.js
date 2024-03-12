import { useState, useEffect } from "react";
import { YOUTUBE_CHANNEL_INFO_API } from "../constant";

const useChannel = (channelId)=>{

    const [channelInfo, setChannelInfo] = useState();
    const accessToken = sessionStorage.getItem('accessToken');
    useEffect(() => {
        getChannelInfo();
    }, [])
    async function getChannelInfo() {
        // const response = await fetch(YOUTUBE_CHANNEL_INFO_API + channelId);
        const options = {
            headers : {
                Authorization : `Bearer ${accessToken}`,
                Accept: "application/json",
            },
            compress: true
        };

        fetch(YOUTUBE_CHANNEL_INFO_API+channelId,options)
            .then((response)=>response.json())
            .then((data)=>{
                setChannelInfo(data?.items?.[0]);
            })
            .catch((error)=>{
                console.error("Error:",error)
            })


        // const json = await response.json();
        // setChannelInfo(json?.items?.[0]);
    }
    return channelInfo;
}
export default useChannel;