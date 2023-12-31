import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_DATA_API, JSON } from "../constant";
import { Link } from "react-router-dom";
import ButtonHeader from "./ButtonHeader";

const VideoContainer = ()=>{

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        getVideo();
    },[]);

    async function  getVideo(){
        // const response = await fetch(YOUTUBE_DATA_API);
        // const json = await response.json();
        const json = JSON;
        setVideos(json.items);
        // console.log(json.items);
    }

    return (
        <div>
            <ButtonHeader />
        <div className="col-span-11 flex flex-wrap justify-evenly space-y-5">
            {videos.map((video,index) =><Link to={"watch?v="+video.id}><VideoCard info={video} key={video.id}/></Link> )}
        </div>
        </div>
    )
}

export default VideoContainer;