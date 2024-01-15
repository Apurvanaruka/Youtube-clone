import { JSON } from "../constant";
import { convertMillionToK } from "../utils/helper";
import { Link } from "react-router-dom";


const SearchCard = ({ item }) => {
    return (
        <div className="flex h-fit p-1 m-2">
            <div className="rounded-xl  mx-1">
                <img className="rounded-xl h-52 w-96 object-cover" alt="" src={item?.snippet?.thumbnails.high.url}></img>
            </div>
            <div className="">
                <h1 className="font-bold">{item?.snippet?.title}</h1>
                <p>{convertMillionToK(item?.statistics?.viewCount)} views {item?.snippet?.publishedAt}</p>
                <div className="flex p-1 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" /></svg>
                    <h1 className="ml-2">{item?.snippet?.channelTitle}</h1>
                </div>
                <div>
                    {(item?.snippet.description).slice(0, 80)}
                </div>
            </div>
        </div>
    )
}

const SearchPage = () => {
    return (
        <div className="h-screen overflow-y-scroll w-full">
            {JSON.items.map((item) => <Link to={'/watch?v='+item.id} key={item.id}><SearchCard  item={item} /></Link>)}
        </div>
    )
}

export default SearchPage;