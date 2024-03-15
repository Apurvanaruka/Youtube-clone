import { useEffect, useState } from "react";
import { JSON, YOUTUBE_SEARCH_API } from "../constant";
import { convertMillionToK, timeAgo } from "../utils/helper";
import { Link, useSearchParams } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

const VideoCard = ({ item }) => {
    return (
        <div className="flex h-fit p-1 m-2">
            <div className="rounded-xl mx-1 ">
                <img className="rounded-xl  object-cover  min-w-40 h-24" alt="" src={item?.snippet?.thumbnails.medium.url}></img>
            </div>
            <div className="">
                <h1 className="font-bold">{item?.snippet?.title}</h1>
                <h1 className="ml-2 text-sm font-extralight">{item?.snippet?.channelTitle}</h1>
                <p className="text-sm font-extralight">{convertMillionToK(item?.statistics?.viewCount)} views {timeAgo(item?.snippet?.publishedAt)}</p>         
            </div>
        </div>
    )
}

const RecommendationVideo = ( { info } ) => {
    console.log(info?.snippet?.title)
    const [searchParam] = useSearchParams();
    // const searchQuery = searchParam.get('q');
    const searchQuery = info?.snippet?.title;
    const [searchResult, setSearchResult] = useState([]);
    const [nextPageToken, setNextPageToken] = useState("");
    const [hasMore, setHasMore] = useState(true);
    const accessToken = sessionStorage.getItem('accessToken');

    useEffect(() => {
        getSearchResult();
    }, [searchQuery]);

    const getSearchResult = async () => {
        // const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        fetch(YOUTUBE_SEARCH_API + searchQuery, {
            headers: {
                'Authorization': `Bearer ${accessToken}`, // Replace with your token
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then((data) => {
                setSearchResult(data?.items);
                console.log(data)
                setNextPageToken(data?.nextPageToken);

            })
            .catch((error) => {
                // Handle potential errors during the request or processing
                console.error('Error:', error);
            });


        // const data = await response.json();
    }
    const getMoreSearchResult = async () => {
        console.log('getMoreSearchResualt');
        if (nextPageToken !== undefined) {
            fetch(`${YOUTUBE_SEARCH_API}${searchQuery}&pageToken=${nextPageToken}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`, // Replace with your token
                    'Accept': 'application/json'
                }
            })
                .then(response => response.json())
                .then((data) => {
                    // Process the retrieved data (search results)
                    console.log(data)
                    setSearchResult(searchResult.concat(data?.items));
                    setNextPageToken(data?.nextPageToken);

                })
                .catch((error) => {
                    // Handle potential errors during the request or processing
                    console.error('Error:', error);
                });




        } else {
            setHasMore(false);
        }
    }


    return (
            <InfiniteScroll
                className="mt-80 pt-24"
                dataLength={searchResult?.length}
                next={getMoreSearchResult}
                hasMore={hasMore} // Replace with a condition based on your data source
                loader={<p className="flex justify-center">Loading...</p>}
                endMessage={<p className="flex justify-center">No More Videos</p>}
                scrollableTarget="watchpage">
                {searchResult?.map((item) => <Link to={'watch?v=' + item?.id?.videoId} key={item?.id?.videoId}><VideoCard item={item} /></Link>)}
            </InfiniteScroll>
    );
}

export default RecommendationVideo;