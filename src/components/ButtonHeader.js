const ButtonHeader = () => {
    const buttonList = ['All', 'Mixes', 'JavaScript', 'Music', 'AI', 'Live', 'Data Structure', 'Machine Learning', 'Computers and Information technology', 'Algorithms', 'Mantras', 'News', 'Comedy', 'New to you', 'Recently uploaded', 'Thoughts', 'Sales', 'Motivation']
    // console.log(buttonList)

    return (
        <div className="w-11/12">
            <ul className="w-full flex m-2 gap-2 overflow-x-scroll">
                {buttonList.map((button, index) =>
                    <li className="bg-gray-200 min-w-fit rounded-lg px-2 py-1" key={index}>{button}</li>
                )}
            </ul>
        </div>
    )
}


export default ButtonHeader;