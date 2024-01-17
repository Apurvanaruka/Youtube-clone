import { Link } from "react-router-dom";
import { NewLine,convertMillionToK } from "../utils/helper";
import { useEffect, useState } from "react";

const VideoInfo = ({info, channelInfo}) => {
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
                <button className="px-3 py-1 m-1 rounded-full bg-gray-200 ml-auto font-medium" >Likes {convertMillionToK(info?.statistics?.likeCount)}</button>
                <button className="px-3 py-1 m-1 rounded-full bg-gray-200">Dislike</button>
                <button className="px-3 py-1 m-1 rounded-full bg-gray-200">share</button>
                <button className="px-3 py-1 m-1 rounded-full bg-gray-200">Downloads</button>
                <button className="px-3 py-1 m-1 rounded-full bg-gray-200">...</button>
            </div>
            <div className="bg-gray-200 rounded-xl p-3">
                <p>{convertMillionToK(info?.statistics?.viewCount)} views   #tag1 #tag2 #tag3</p>
                <div>
                <NewLine text={info?.snippet?.description}/> 
              </div>
                
            </div>
        </div>
    )
}

export default VideoInfo;