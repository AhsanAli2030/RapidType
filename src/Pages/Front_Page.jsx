import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MainPart from "../components/MainPart";
import { useSelector } from "react-redux";
const FrontPage = () => {
  const isLoaded = useSelector((store) => store.isLoaded);

  return (
    <>
      <div
        className={`w-full h-full  duration-200  ${
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
