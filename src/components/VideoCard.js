const VideoCard = ({ info }) => {
    return (
        <div className="w-80">
            <div>
                <img className="rounded-xl w-80 h-48 object-cover" alt="" src={info?.snippet?.thumbnails?.high?.url} />
            </div>
            <div className="flex ">
                <div className="p-2">
                    <img className=" rounded-full object-cover w-9 h-9" alt="" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" />
                </div>
                <div className="">
                    <div className="flex max-h-11 max-w-96 font-bold overflow-hidden">
                        <h1 className="ml-1">{info?.snippet?.title}</h1>
                    </div>
                    <h3>{info?.snippet?.channelTitle}</h3>
                    <h3>{info?.statistics?.viewCount+" views"} {info?.snippet?.publishedAt}</h3>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;