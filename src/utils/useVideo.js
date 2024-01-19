import { useEffect, useState } from "react";
import { YOUTUBE_DATA_API, JSON } from "../constant";


const useVideo = ()=>{
    const [videos, setVideos] = useState([]);
    const [ nextPageToken, setNextPageToken ] = useState("");
    const [ hasMore, setHasMore ] = useState(true);

    useEffect(() => {
        getVideo();
    }, []);

    async function getVideo() {
        // const response = await fetch(YOUTUBE_DATA_API);
        // const json = await response.json();
        const json = JSON;
        setVideos(json?.items);
        setNextPageToken(json?.nextPageToken);
    }

    const getMoreVideos = async ()=>{
        if(nextPageToken !== undefined){
            // const response = await fetch(YOUTUBE_DATA_API+"&pageToken="+nextPageToken);
            // const json = await response.json();
            const json = JSON;
            setVideos(videos.concat(json?.items));
            setNextPageToken(json?.nextPageToken);
        }else{
            setHasMore(false);
        }
    }

    return [ videos, getMoreVideos, hasMore ];

}
export default useVideo;