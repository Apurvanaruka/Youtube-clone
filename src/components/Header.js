
const Header = () => {

    return (
        <div className="grid grid-flow-col">
            <div className="flex col-span-1">
                <img className="w-10 h-10 m-3" alt="" src="https://cdn.iconscout.com/icon/free/png-256/free-menu-1781200-1518574.png" ></img>
                <img className="h-16" alt="" src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg" />
            </div>
            <div className="col-span-10 p-3 flex">
                <input className="w-1/2 bg-gray-100 rounded-l-full" />
                <button className=" px-6 rounded-r-full bg-gray-200">
                    <img className="w-10" alt="" src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg"></img>
                </button>
            </div>
            <div className="col-span-1">
                <img className="w-10" alt='' src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'></img>
            </div>
        </div>
    )

}

export default Header;