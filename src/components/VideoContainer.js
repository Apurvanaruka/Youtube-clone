import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ButtonHeader from "./ButtonHeader";
import useVideo from "../utils/useVideo";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import OAuthSignIn from "../utils/OAuthSignIn";



const VideoContainer = () => {
    const [videos, getMoreVideos, hasMore] = useVideo(); // return video list
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true' // sessionStorage save string in this method
    
    
    useEffect(() => {

        // Extract access token from URI fragment
        if(!isAuthenticated){
            const accessToken = extractAccessToken(window.location.hash)
            sessionStorage.setItem('accessToken', accessToken);
            sessionStorage.setItem('isAuthenticated', !!accessToken);
        }    
    }, []);

    // Function to extract access token from URI fragment
    const extractAccessToken = (hash) => {
      const match = hash.match(/access_token=([^&]*)/);
      return match ? match[1] : null;
    };
    
    return (
        ( !isAuthenticated ? ( <OAuthSignIn /> ):
        (<div>
            {/* <ButtonHeader /> */}
            <div className="h-[685px] overflow-scroll no-scrollbar" id='homepage'>
                <InfiniteScroll className="flex flex-wrap justify-center"
                    dataLength={videos?.length || 0}
                    next={getMoreVideos}
                    hasMore={hasMore} 
                    loader={<div className="flex justify-center w-screen">Loading...</div>}
                    endMessage={<div className="flex justify-center w-screen ">No More videos</div>}
                    scrollableTarget="homepage">
                    {videos?.map((video) => <Link to={"watch?v=" + video?.id} key={video?.id}><VideoCard info={video} /></Link>)}
                </InfiniteScroll>
            </div>
        </div>))
    )
}

export default VideoContainer;