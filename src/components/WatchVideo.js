import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";


const WatchVideo = () => {
    const dispatch = useDispatch();
    dispatch(closeMenu());
    const [searchParam] = useSearchParams();

    console.log(searchParam.get('v'));
    const src = "https://www.youtube.com/embed/" + searchParam.get('v');
    return (
        <div>
            <h1>watch page</h1>
            <iframe width="799rem" height="500rem" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h1>comment </h1>
        </div>
    )
}

export default WatchVideo;