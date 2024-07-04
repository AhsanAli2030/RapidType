import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MainPart from "../components/MainPart";
import { useSelector } from "react-redux";
const FrontPage = () => {
  const isLoaded = useSelector((store) => store.isLoaded);
  const [popupToggle, setPopUpToggle] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setPopUpToggle(true);
      setTimeout(() => {
        setPopUpToggle(false);
      }, 8000);
    }, 3000)

  }, [])

  return (
    <>
      <div className={` bg-[#EE6056] absolute right-[1%] top-[5%] rounded-2xl text-[#FFFFFF] roboto  text-center font-medium flex flex-col items-center justify-center gap-2 duration-500 
      ${popupToggle === true ? 'w-[17%] h-[17%] text-2xl' : 'w-0 h-0 overflow-hidden text-opacity-0'}`} >
        Press Space for Jump to next word ...
        <div className="w-[28%]  h-[26%]  flex" >
          <div className="hover:text-3xl cursor-pointer duration-500 w-[80%] h-90%]" onClick={() => setPopUpToggle(false)}>✅</div>
        </div>
      </div>
      <div
        className={`w-full h-full  duration-200  $3
          isLoaded === true ? "opacity-1" : "opacity-0"
        }`}
      >
        <Header></Header>

        <MainPart></MainPart>
      </div>
    </>
  );
};
export default FrontPage;
