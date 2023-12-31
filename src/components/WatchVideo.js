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
            <iframe width="900" height="500" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
    )
}

export default WatchVideo;