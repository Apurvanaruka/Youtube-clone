const Btn = ({btn})=> (<button className="p-3 m-1 text-xl bg-gray-200 rounded-full">{btn}</button>)

const Shorts = () => {
    const btnList = ['👍🏿','👎🏿','💬']
    return (
        <div className="flex justify-center w-full h-fit bg-green-400">
                <iframe  className="rounded-xl my-4 bg-blue-300"
                    width="347"
                    height="617"
                    src="https://www.youtube.com/embed/vmb_wcxfa6I"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                <div className="bg-red-50 flex flex-col justify-end">
                    {
                        btnList.map((btn) => <Btn key={btn} btn={btn} />)    
                    }
                    <Btn />
                </div>
        </div>

    )
}

export default Shorts;