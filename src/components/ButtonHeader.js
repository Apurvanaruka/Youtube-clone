const ButtonHeader = () =>{
    const buttonList = ['All','Mixes','JavaScript','Music','AI','Live','Data Structure','Machine Learning','Computers and Information technology']
    // console.log(buttonList)

    return (
        <div className="m-2">
        {buttonList.map((button,index)=>
            <button className="bg-gray-200 rounded-lg px-2 py-1 mx-1" key={index}>{button}</button>
        )}
        </div>
    )
}


export default ButtonHeader;