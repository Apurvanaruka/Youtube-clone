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
            {/* <ButtonHeader /> */}
        <div className="flex flex-wrap justify-center h-screen overflow-scroll no-scrollbar">
            {videos.map((video,index) =><Link to={"watch?v="+video.id}  key={video.id}><VideoCard info={video}/></Link> )}
        </div>
        </div>
    )
}

export default VideoContainer;