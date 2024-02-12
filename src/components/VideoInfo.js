import { Link } from "react-router-dom";
import { NewLine, convertMillionToK } from "../utils/helper";
import { useState } from "react";

const VideoInfo = ({ info, channelInfo }) => {
    const [seeMore, setSeeMore] = useState(false);
    const handleOnClick = () => {
        setSeeMore(!seeMore);
    }

    const handleOnClickLike = () => {

        const apiUrl = 'https://youtube.googleapis.com/youtube/v3/videos/rate?id=o7O-BuZwkW0&rating=like&key=';
        const accessToken = '[YOUR_ACCESS_TOKEN]';

        const headers = {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json',
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: headers
        })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));


    }

    return (
        <div className="p-1">
            <h1 className="text-xl font-medium">{info?.snippet?.title}</h1>
            <div className="flex p-2 items-center">
                <Link to='/' className="flex space-x-2">
                    <img className="w-10 rounded-full" alt="" src={channelInfo?.snippet?.thumbnails?.default?.url}></img>
                    <pre>
                        <h1 className="font-bold">{info?.snippet?.channelTitle}</h1>
                        <p className="text-xs text-slate-900">{convertMillionToK(channelInfo?.statistics?.subscriberCount)}</p>
                    </pre>
                </Link>
                <button className="text-white bg-black px-3 py-1 rounded-full ml-2">Subscribe</button>
                <button className="px-3 py-1 m-1 rounded-full bg-gray-200 ml-auto font-medium" onClick={handleOnClickLike} >👍 {convertMillionToK(info?.statistics?.likeCount)}</button>
                <button className="px-3 py-1 m-1 rounded-full bg-gray-200">👎</button>
                <button className="px-3 py-1 m-1 rounded-full bg-gray-200">share</button>
                <button className="px-3 py-1 m-1 rounded-full bg-gray-200">Downloads</button>
                <button className="px-3 py-1 m-1 rounded-full bg-gray-200">...</button>
            </div>
            <div className="bg-gray-200 rounded-xl p-3">
                <p>{convertMillionToK(info?.statistics?.viewCount)} views {info?.snippet?.tags?.slice(0, 3)?.map((tag) => "#" + tag + " ")}</p>
                <NewLine text={info?.snippet?.description} seeMore={seeMore} />
                {(seeMore ? (<button className="font-bold" onClick={handleOnClick}>See less</button>) : (<button className="font-bold" onClick={handleOnClick}>See more</button>))}

            </div>
        </div>
    )
}

export default VideoInfo;
