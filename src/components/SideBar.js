import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";



const SidePannel = () => {

    return (
        <div className="max-w-74px m-1 py-2 px-1">
            <ul className="space-y-4 text-3xl" >
                <Link to='/' className="flex flex-col items-center space-y-2">
                    <li><VscHome /></li>
                    <p className="text-[12px]" >Home</p>
                </Link>
                <Link className="flex flex-col items-center space-y-2">
                    <li><BsLightningCharge /></li>
                    <p className="text-[12px]" >Shorts</p>
                </Link>
                <Link className="flex flex-col items-center space-y-2">
                    <li>
                    <MdOutlineSubscriptions />
                    </li><p className="text-[12px]" >Subscriptions</p>
                </Link>

                <Link to='/' className="flex flex-col items-center space-y-2">
                    <li>
                    <IoCopyOutline />
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
                <li><Link to={"/shorts"}>Shorts</Link></li>
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