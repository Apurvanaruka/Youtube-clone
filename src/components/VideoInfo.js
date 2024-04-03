import { Link } from "react-router-dom";
import { NewLine, convertMillionToK } from "../utils/helper";
import { useState } from "react";
import { YOUTUBE_API_KEY } from "../constant";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { TbShare3 } from "react-icons/tb";
import { LiaDownloadSolid } from "react-icons/lia";




const VideoInfo = ({ info, channelInfo }) => {
  const [seeMore, setSeeMore] = useState(false);
  const accessToken = sessionStorage.getItem('accessToken')

  const handleOnClick = () => {
    setSeeMore(!seeMore);
  }

  const handleRateVideo = () => {
    fetch(`https://youtube.googleapis.com/youtube/v3/videos/rate?id=${info?.id}&rating=like`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json'
      },
    })
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to rate video');
        }
        // Check if response has JSON data
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response;
        } else {
          return null; // No JSON data
        }
      })
      .then(data => {
        if (data) {
          console.log('Video rated successfully:', data);
        } else {
          console.log('Video rated successfully.'); // No JSON data
        }
      })
      .catch(error => {
        console.error('Error rating video:', error);
      });
  };


  return (
    <div className="p-1">
      <h1 className="text-xl font-medium">{info?.snippet?.title}</h1>
      <div className="sm:flex">
        
          <div className="flex p-2 items-center sm:w-1/2">
            <Link to='/' className="flex space-x-2">
              <img className="w-10 rounded-full" alt="" src={channelInfo?.snippet?.thumbnails?.default?.url}></img>
              <pre>
                <p className="sm:font-bold">{info?.snippet?.channelTitle.slice(0,20)}</p>
                <p className="text-xs text-slate-900">{convertMillionToK(channelInfo?.statistics?.subscriberCount)}</p>
              </pre>
            </Link>
            <button className="text-white bg-black px-3 py-2 rounded-full sm:m-2 ml-auto mr-2">Subscribe</button>
          </div>
          <div className="flex items-center ml-auto sm:place-content-end sm:w-1/2">
            <div className="rounded-full bg-gray-200 flex  px-3 py-2 items-center space-x-2 ">
              <button className="flex gap-2 items-center pr-2 border-gray-500 border-r-2 " onClick={handleRateVideo} ><FiThumbsUp /> {convertMillionToK(info?.statistics?.likeCount)}</button>
              <button className=""><FiThumbsDown /></button>
            </div>
            <button className="px-3 py-2 m-1 rounded-full bg-gray-200 flex items-center gap-1"><TbShare3 /> share</button>
            <button className="px-3 py-2 m-1 rounded-full bg-gray-200 flex items-center gap-1"><LiaDownloadSolid />Downloads</button>
            <button className="px-3 py-2 m-1 rounded-full bg-gray-200">...</button>
          </div>
        
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
