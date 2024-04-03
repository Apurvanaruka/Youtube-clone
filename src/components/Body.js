import SideBar from "./SideBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Body = () => {

    console.log(window.location.origin)
    return (
        <>
            <Header />
            <div className="flex">
                { (window.innerWidth > 640) && <SideBar />}
                <Outlet />
            </div>
        </>

    )
}

export default Body;