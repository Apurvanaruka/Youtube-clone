const Btn = ({btn, text})=> (
    <div>
        <p>{text}</p>
    </div>
)


const Shorts = () => {
    const btnList = ['','👎','💬','🚀','🚦']
	return (
        <div className="flex justify-center w-full h-fit">
                <iframe  className="rounded-xl my-4 bg-blue-300"
                    width="347"
                    height="617"
                    src="https://www.youtube.com/embed/vmb_wcxfa6I"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullscreen>
                </iframe>
                <div className="flex flex-col justify-end">
                    {/* {btnList.map((btn, index) => <Btn key={index} btn={btn} text="text" />)} */}
	    <div>
	    
        <button className="p-3 m-1 text-xl bg-gray-200 rounded-full">👍</button>
	    </div>
                </div>
       </div>

    )
}

export default Shorts;
