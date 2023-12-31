import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SidePannel = () => {
    return (
        <div className="bg-red-600">
            <ul className="m-4 space-y-5" >
                <li><svg className="mx-1" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg><p className="text-xs" >Home</p></li>
                <li>
                <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>
                <p className="text-xs" >Shorts</p>
                </li>
            </ul>
        </div>
    )
}

const SideBar = () => {
    const showMenu = useSelector((state) => state.toggle.showMenu);

    return (showMenu ? <SidePannel /> : (

        <div className="pl-7 shadow-lg pr-16 max-w-60">
            <ul className="space-y-2  font-bold">
                <li><Link to={'/'}>Home</Link></li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <hr className="border-black my-4" />
            <h2 className="font-extrabold">You</h2>
            <ul className="ml-3 space-y-2 ">
                <li>Your channel</li>
                <li>History</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
                <li>Your clips</li>
                <li>show more</li>
            </ul>
            <hr className="border-black my-4 " />
            <h2 className="font-extrabold" >Explore</h2>
            <ul className="ml-3 space-y-2 ">
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Films</li>
                <li>Live</li>
                <li>Gamming</li>
                <li>sports</li>
                <li>Learning</li>
                <li>Podcasts</li>
            </ul>
        </div>
    ))
}

export default SideBar;