import React, { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch } from "react-redux";
const Loading_Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "keyboardLoaded" });
  }, []);
  return (
    <div className=" w-screen h-screen flex items-center justify-center bg-[#323437] shadow-inner ">
      <ThreeDots
        visible={true}
        height="100"
        width="100"
        color="#EE6056"
        radius="10"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading_Page;
