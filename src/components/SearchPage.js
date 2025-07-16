import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../constant";
import { convertMillionToK, timeAgo } from "../utils/helper";
import { Link, useSearchParams } from "react-router-dom";

const SearchCard = ({ item }) => {
  return (
    <div className="flex h-fit p-1 m-2 border-b">
      <div className="rounded-xl mx-1 ">
        <img
          className="rounded-xl object-cover min-w-96 h-48"
          alt=""
          src={item?.snippet?.thumbnails?.high?.url}
        />
      </div>
      <div className="">
        <h1 className="font-bold">{item?.snippet?.title}</h1>
        <p className="text-sm font-extralight">
          {convertMillionToK(item?.statistics?.viewCount)} views{" "}
          {timeAgo(item?.snippet?.publishedAt)}
        </p>
        <div className="flex p-1 py-3 font-extralight">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            width="25"
            viewBox="0 0 512 512"
          >
            <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
          </svg>
          <h1 className="ml-2 text-sm font-extralight">
            {item?.snippet?.channelTitle}
          </h1>
        </div>
        <p className="text-sm font-extralight">
          {item?.snippet?.description?.slice(0, 150)}
        </p>
      </div>
    </div>
  );
};

const SearchPage = () => {
  const [searchParam] = useSearchParams();
  const searchQuery = searchParam.get("q");
  const [searchResult, setSearchResult] = useState([]);
  const accessToken = sessionStorage.getItem("accessToken");

  useEffect(() => {
    getSearchResult();
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSearchResult = async () => {
    if (!accessToken) {
      console.error("No access token found. Please sign in first.");
      return;
    }

    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        console.error("YouTube API request failed:", response.statusText);
        return;
      }

      const data = await response.json();
      console.log(data);
      setSearchResult(data?.items || []);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-[680px] overflow-y-scroll w-full" id="searchpage">
      {searchResult?.length > 0 ? (
        searchResult.map((item) => (
          <Link
            to={"/watch?v=" + item?.id?.videoId}
            key={item?.id?.videoId}
          >
            <SearchCard item={item} />
          </Link>
        ))
      ) : (
        <p className="flex justify-center p-4 text-gray-500">
          No results found or loading...
        </p>
      )}
    </div>
  );
};

export default SearchPage;
