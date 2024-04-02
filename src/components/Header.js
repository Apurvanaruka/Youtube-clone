import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { addCache } from "../utils/cacheSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTION_API } from "../constant";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";





const Header = () => {
	const dispatch = useDispatch();
	const [searchQuery, setSearchQuery] = useState("");
	const [searchSuggestion, setSearchSuggestion] = useState([]);
	const [showSuggestion, setShowSuggestion] = useState(false);
	const suggestionData = useSelector((state) => state.suggestionCache.suggestions);


	useEffect(() => {
		if (Object.keys(suggestionData).includes(searchQuery)) {
			setSearchSuggestion(suggestionData[searchQuery])
		} else {
			const Timer = setTimeout(() => getSearchSuggestion(), 200);
			return (() => {
				clearTimeout(Timer);
			});
		}

	}, [searchQuery])

	async function getSearchSuggestion() {
		const response = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
		const data = await response.json()
		setSearchSuggestion(data[1]);
		dispatch(addCache({ [searchQuery]: searchSuggestion }));
	}
	function handleOnBlur() {
		setTimeout(() => setShowSuggestion(false), 200)
	}

	return (
		<div className="flex items-center h-14 w-screen z-1 " >
			<AiOutlineMenu className="md:visible invisible ml-8 text-3xl" onClick={() =>
				dispatch(toggleMenu())
			} />

			<Link to='/' className="flex justify-center items-center col-span-1 sm:ml-12 text-2xl">
				<FaYoutube />
				<h1 className="my-2 ml-1 font-bold text-xl">YouTube</h1>
			</Link>
			<div className="col-span-10 w-full flex justify-center items-center" >
				<div className="w-1/2">
					<input  className="sm:visible invisible  w-full pl-5 h-10 rounded-l-full border-y-2 border-l-2 border-gray-200" onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => { setShowSuggestion(true) }} onBlur={() => handleOnBlur()} value={searchQuery} placeholder="Search" />
					{showSuggestion && <ul className="absolute w-[41.5%] z-10 bg-white rounded-2xl mx-1 " >
						{
							searchSuggestion.map((suggestion) => (<Link to={"/searchpage?q=" + suggestion} key={suggestion} className="shadow-sm p-2 flex items-center hover:bg-gray-100 hover:rounded-xl"><IoIosSearch className="text-2xl" />
								{suggestion}</Link>))
						}
					</ul>}
				</div>
				<Link to={"/searchpage?q=" + searchQuery} className="text-2xl px-6 h-10 flex items-center sm:rounded-r-full sm:border-y-2 sm:border-l-2 sm:border-gray-300 sm:bg-gray-200">
					<IoIosSearch />
				</Link>
			</div>
			<button className="col-span-1 flex justify-center items-center p-3 text-3xl">
				<FaRegUserCircle />
			</button>
		</div>
	)

}

export default Header;
