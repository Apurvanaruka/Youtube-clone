import { useEffect, useState } from "react";
import { YOUTUBE_DATA_API,YOUTUBE_CHANNEL_INFO_API, JSON } from "../constant";


const useVideo = ()=>{
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideo();
    }, []);

    async function getVideo() {
        // const response = await fetch(YOUTUBE_DATA_API);
        // const json = await response.json();
        const json = JSON;
        setVideos(json.items);
    }

    return videos;

}
export default useVideo;