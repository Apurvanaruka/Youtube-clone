import { useSelector } from "react-redux";
import { convertMillionToK, timeAgo } from "../utils/helper";
import useChannel from "../utils/useChannel";


const VideoCard = ({ info }) => {
    const showMenu = useSelector((state) => state.toggle.showMenu);
    const channelInfo = useChannel(info?.snippet?.channelId);

    return (showMenu ? (
        <div className="w-80 m-2">
            <div>
                <img className="rounded-xl h-48 w-80 object-cover" alt="" src={info?.snippet?.thumbnails?.high?.url} />
            </div>
            <div className="flex ">
                <div className="p-2">
                    <img className=" rounded-full object-cover max-w-9 max-h-9" alt="" src={channelInfo?.snippet?.thumbnails?.default?.url}/>
                </div>
                <div className="">
                    <div className="flex max-h-11 max-w-96 font-bold overflow-hidden">
                        <h1 className="ml-1">{info?.snippet?.title}</h1>
                    </div>
                    <h3>{info?.snippet?.channelTitle}</h3>
                    <h3>{convertMillionToK(info?.statistics?.viewCount) + " views"} {timeAgo(info?.snippet?.publishedAt) }</h3>
                </div>
            </div>
        </div>
    ) : (
        <div className="w-96 m-2 ">
            <div>
                <img className="rounded-xl h-56 w-96 object-cover" alt="" src={info?.snippet?.thumbnails?.high?.url} />
            </div>
            <div className="flex ">
                <div className="p-2">
                    <img className=" rounded-full object-cover max-w-8 max-h-8" alt="" src={channelInfo?.snippet?.thumbnails?.default?.url}/>
                </div>
                <div className="">
                    <div className="flex max-h-11 max-w-96 font-bold overflow-hidden">
                        <h1 className="ml-1">{info?.snippet?.title}</h1>
                    </div>
                    <h3>{info?.snippet?.channelTitle}</h3>
                    <h3>{convertMillionToK(info?.statistics?.viewCount) + " views"} {timeAgo(info?.snippet?.publishedAt)}</h3>
                </div>
            </div>
        </div>
    ));
}

export default VideoCard;