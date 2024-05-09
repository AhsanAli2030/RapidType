import React, { useState, useEffect, useRef } from "react";
import Coding from "../assets/coding.png";
import Master from "../assets/Master.png";
import Intermediate from "../assets/Intermediate.png";
import Elementary from "../assets/Elementary.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const [hoverDifficultyLevel, setHoverDifficultyLevel] = useState(false);
  const divRef = useRef(null);

  // const handleMouseEnter = () => setHoverDifficultyLevel(true);
  // const handleMouseLeave = () => setHoverDifficultyLevel(false);
  const check = useSelector((store) => store.check);
  const [buttonsChangeDL, setbuttonsChangeDL] = useState(false);
  const [buttonsChangePG, setbuttonsChangePG] = useState(false);
  const [buttonsChangeA, setbuttonsChangeA] = useState(false);

  const handleElementary = () => {
    dispatch({ type: "ELEMENTARY" });
  };
  const handleIntermediate = () => {
    dispatch({ type: "INTERMEDIATE" });
  };
  const handleMaster = () => {
    dispatch({ type: "MASTER" });
  };

  useEffect(() => {
    if (check === "RETRY") {
      setHoverDifficultyLevel(false);
    }
  }, [check]);

  useEffect(() => {
    function handleClickedOutside(e) {
      if (
        !e.target.closest(".clickable-div") &&
        !e.target.closest(".hidden-div")
      ) {
        setHoverDifficultyLevel(false);
      } else setHoverDifficultyLevel(true);
    }

    document.addEventListener("click", handleClickedOutside);

    return () => {
      document.removeEventListener("click", handleClickedOutside);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[10%] flex items-center justify-around ">
        <div
          className="w-16 flex items-center justify-between cursor-pointer "
          onClick={() => {
            dispatch({ type: "RETRY" });
          }}
        >
          <img src={Coding} alt="" />
          <div className="text-[#ffffff] text-4xl roboto ml-2"> Rapidtype</div>
        </div>

        <div className="flex  w-[40%] align-center justify-around text-3xl text-[#ffffff] roboto  pr-[3%]">
          <div
            className={` clickable-div relative border-4 w-52 h-12 text-center border-[#EE6056] hover:bg-[#EE6056] rounded-lg cursor-pointer duration-500 hover:text-[110%] ${
              hoverDifficultyLevel === true ? "bg-[#EE6056] text-[110%]" : ""
            }`}
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            onClick={() => {
              setbuttonsChangeDL(true);
              setHoverDifficultyLevel(true);
              setbuttonsChangeA(false);
              setbuttonsChangePG(false);
            }}
          >
            Difficulty Level
            {hoverDifficultyLevel && (
              <div
                ref={divRef}
                className="hidden-div absolute top-[120%] left-[-14%] text-[#ffffff] text-2xl w-64 h-64 border-[#EE6056] border-4 flex flex-col align-middle justify-around bg-[#ee6056] roboto rounded-lg"
                // onMouseEnter={handleMouseEnter}
                // onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`  ${
                    check === "elementary"
                      ? "bg-[#323437] rounded-lg shadow-2xl shadow-[#323437] text-3xl"
                      : ""
                  }    flex align-middle justify-around cursor-pointer hover:shadow-2xl hover:shadow-[#323437] duration-300 hover:text-3xl `}
                  onClick={handleElementary}
                >
                  <div className="flex items-center ">Elementary</div>
                  <img className="w-16" src={Elementary} alt="" />
                </div>

                <div
                  className={` ${
                    check === "intermediate"
                      ? "bg-[#323437] rounded-lg shadow-2xl shadow-[#323437] text-3xl"
                      : ""
                  }      flex align-middle justify-around cursor-pointer hover:shadow-2xl hover:shadow-[#323437] duration-500 hover:text-3xl`}
                  onClick={handleIntermediate}
                >
                  <div className="flex items-center">Intermediate</div>
                  <img className="w-16" src={Intermediate} alt="" />
                </div>

                <div
                  className={`  ${
                    check === "master"
                      ? "bg-[#323437] rounded-lg shadow-2xl shadow-[#323437] text-3xl"
                      : ""
                  }   flex align-middle justify-around cursor-pointer hover:shadow-2xl hover:shadow-[#323437] duration-500 hover:text-3xl`}
                  onClick={handleMaster}
                >
                  <div className="flex  ml-[1rem] items-center">Master</div>
                  <img className="w-[5rem] ml-[4rem]" src={Master} alt="" />
                </div>
              </div>
            )}
          </div>
          <Link to="https://typenpop.netlify.app/">
            <div
              className={`border-4 w-52 h-12 text-center border-[#EE6056] rounded-lg cursor-pointer hover:bg-[#EE6056] duration-300   hover:text-[110%] ${
                buttonsChangePG === true ? "bg-[#EE6056] text-[110%]" : ""
              }`}
              onClick={() => {
                setbuttonsChangePG(true);
                setbuttonsChangeDL(false);
                setbuttonsChangeA(false);
              }}
            >
              Play Game{" "}
            </div>
          </Link>
          {/* <div
            className={`border-4 w-52 h-12 text-center border-[#EE6056] rounded-lg cursor-pointer hover:bg-[#EE6056] hover:text-[110%] duration-300 ${
              buttonsChangeA === true ? "text-[110%] bg-[#EE6056]" : ""
            }`}
            onClick={() => {
              setbuttonsChangeA(true);
              setbuttonsChangeDL(false);
              setbuttonsChangePG(false);
            }}
          >
            About
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
