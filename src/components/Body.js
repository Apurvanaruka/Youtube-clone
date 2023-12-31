import SideBar from "./SideBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <>
            <Header />
            <div className="flex">
                <SideBar />
                <Outlet />
            </div>
        </>

    )
}

export default Body;