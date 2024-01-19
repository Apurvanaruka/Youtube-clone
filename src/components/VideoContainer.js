import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ButtonHeader from "./ButtonHeader";
import useVideo from "../utils/useVideo";
import InfiniteScroll from "react-infinite-scroll-component";


const VideoContainer = () => {
    const [videos, getMoreVideos, hasMore] = useVideo(); // return video list
    return (
        <div>
            {/* <ButtonHeader /> */}
            <div className="h-[685px] overflow-scroll no-scrollbar" id='homepage'>
                <InfiniteScroll className="flex flex-wrap justify-center"
                    dataLength={videos.length}
                    next={getMoreVideos}
                    hasMore={hasMore} 
                    loader={<div className="flex justify-center">Loading...</div>}
                    endMessage={<div className="flex justify-center">No More videos</div>}
                    scrollableTarget="homepage">
                    {videos?.map((video) => <Link to={"watch?v=" + video?.id} key={video?.id}><VideoCard info={video} /></Link>)}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default VideoContainer;