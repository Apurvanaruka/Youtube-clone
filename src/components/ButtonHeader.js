import { useEffect, useState } from "react";

const ButtonHeader = () => {
    // const buttonList = ['All', 'Mixes', 'JavaScript', 'Music', 'AI', 'Live', 'Data Structure', 'Machine Learning', 'Computers and Information technology', 'Algorithms', 'Mantras', 'News', 'Comedy', 'New to you', 'Recently uploaded', 'Thoughts', 'Sales', 'Motivation']
    // console.log(buttonList)
    const [ buttonList ,setButtonList ] = useState([]);
    useEffect(()=>{
        getButtonlist();
    },[]);

    async function getButtonlist(){
        const response = await fetch('https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=in&key=AIzaSyA8ItaMF0kKd43YrVPtY-SAYLQhGq-j1Pk')
        const data = await response.json();
        console.log(data?.items);
        setButtonList(data?.items);
    }

    return (
        <div className="w-11/12">
            <ul className="w-full flex gap-2 overflow-x-scroll no-scrollbar">
                {buttonList.map((button) =>
                    <li className="bg-gray-200 min-w-fit rounded-lg px-2 py-1" key={button?.snippet?.id}>{button?.snippet?.title}</li>
                )}
            </ul>
        </div>
    )
}


export default ButtonHeader;