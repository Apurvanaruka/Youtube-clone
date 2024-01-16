import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ButtonHeader from "./ButtonHeader";
import useVideo from "../utils/useVideo";


const VideoContainer = () => {
    const videos = useVideo(); // return video list
    return (
        <div>
            {/* <ButtonHeader /> */}
            <div className="flex flex-wrap justify-center h-screen overflow-scroll no-scrollbar">
                {videos?.map((video, index) => <Link to={"watch?v=" + video.id} key={video.id}><VideoCard info={video} /></Link>)}
            </div>
        </div>
    )
}

export default VideoContainer;