const SideBar = () => {
    return (

        
        <div className="pl-7 col-span-1 shadow-lg">
            <ul className="space-y-2 font-bold">
                <li>Home</li>
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

    )
}

export default SideBar;