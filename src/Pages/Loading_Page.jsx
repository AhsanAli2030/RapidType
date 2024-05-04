import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loading_Page = () => {
  return (
    <div className=" w-screen h-screen flex items-center justify-center bg-[#323437] shadow-inner "><ThreeDots
    visible={true}
    height="80"
    width="80"
    color="#EE6056"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    /></div>
  );
};

export default Loading_Page;
