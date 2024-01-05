import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import { generateName } from "../utils/helper";

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatData = useSelector((state) => state.LiveChatSlice.chat)
    const [sendChat, setSendChat] = useState();


    useEffect(() => {
        const i = setInterval(() => {
            // console.log('api polling');
            dispatch(addChat(getDummyChat()))
        }, 2000)
        return () => { clearInterval(i) }
    }, [])

    function getDummyChat() {

        const name = generateName()

        return { name: name, message: generateName() }
    }
    // rj02ub138
    return (
        <div className="w-[426px] border-solid border-2 border-slate-200 h-fit rounded-2xl">
            <div className="border-b-2 px-4 py-3 border-gray-200">
                <h1 className="text-lg">Top Chat</h1>
            </div>
            <div className="mx-3 max-h-96 overflow-y-scroll flex flex-col-reverse">
                {chatData.map((chat) => {
                    return (
                        <div className="flex my-1">
                            <div className="m-1 flex">
                                {/* <img className="rounded-full w-5" alt="image" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" /></svg>
                                <h1 className="font-extralight ml-2">{chat?.name}</h1>
                                <p className="mx-2">{chat?.message}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="border-2 border-gray-100">

                <form className="px-3 py-2" onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(addChat({ name: 'apurva naruka', message: sendChat }))
                    setSendChat("")
                }}>
                    <input placeholder="Chat..." className="w-4/5 bg-gray-200 px-3 py-2 m-1 rounded-full" onChange={(e) => setSendChat(e.target.value)} value={sendChat} />
                    <button className="px-3 py-2 m-1 rounded-full bg-gray-200">Send</button>
                </form>
                <div className="border-t-2 border-gray-200 py-2 flex">
                    <h1 className="m-auto text-lg" >Hide Chat</h1>
                </div>
            </div>
        </div>
    )
}

export default LiveChat;