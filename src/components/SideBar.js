import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const SidePannel = () => {

    return (
        <div className="max-w-74px m-1 py-2 px-1">
            <ul className="space-y-8" >
                <Link to='/' className="flex flex-col items-center space-y-2">
                    <li><svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
                    </li><p className="text-[10px]" >Home</p>
                </Link>
                <Link className="flex flex-col items-center space-y-2">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" /></svg>
                    </li><p className="text-[10px]" >Shorts</p>
                </Link>
                <Link className="flex flex-col items-center space-y-2">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                    </li><p className="text-[10px]" >Subscriptions</p>
                </Link>

                <Link to='/' className="flex flex-col items-center space-y-2">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 512 512"><path d="M96 352V96c0-35.3 28.7-64 64-64H416c35.3 0 64 28.7 64 64V293.5c0 17-6.7 33.3-18.7 45.3l-58.5 58.5c-12 12-28.3 18.7-45.3 18.7H160c-35.3 0-64-28.7-64-64zM272 128c-8.8 0-16 7.2-16 16v48H208c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V256h48c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H320V144c0-8.8-7.2-16-16-16H272zm24 336c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 224c0 48.6 39.4 88 88 88H296z" /></svg>
                    </li><p className="text-[10px]" >You</p>
                </Link>

            </ul>
        </div>
    )
}

const SideBar = () => {
    const showMenu = useSelector((state) => state.toggle.showMenu);

    return (showMenu ? <SidePannel /> : (

        <div className="pl-7 shadow-lg pr-16 min-w-60 overflow-y-scroll no-scrollbar">
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