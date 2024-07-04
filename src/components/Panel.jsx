import React, { useEffect, useState } from "react";
import Clock from "../assets/Clock.png";
import Clock_2 from "../assets/Clock_2.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Panel = () => {
  const [clockColor, setClockColor] = useState(false);
  const [isClicked, setisClicked] = useState(false);

  const handleMouseEnterClock = () => {
    setTimeout(() => {
      setClockColor(true);
    }, [300]);
  };

  const handleMouseLeaveClock = () => {
    if (isClicked === false) {
      setClockColor(false);
    }
  };

  const clockClicked = () => {
    setisClicked(true);
  };
  const dispatch = useDispatch();
  const check = useSelector((store) => store.check);

  const handlePunctuation = () => {
    dispatch({ type: "PUNCTUATION" });
  };
  const handleNumbers = () => {
    dispatch({ type: "NUMBERS" });
  };
  const handleSpecialCharacters = () => {
    dispatch({ type: "SCHARACTERS" });
  };
  const fifteenSecs = () => {
    dispatch({ type: "fifteenSecs" });
  };
  const thirtySecs = () => {
    dispatch({ type: "thirtySecs" });
  };
  const fourtySecs = () => {
    dispatch({ type: "fourtySecs" });
  };

  const fiftySecs = () => {
    dispatch({ type: "fiftySecs" });
  };

  useEffect(() => {
    if (check === "RETRY") {
      setClockColor(false);
      setisClicked(false);
    }
  }, [check]);

  return (
    <>
      <div className="w-full h-[10%] flex justify-center ">
        <div className="w-[60%] h-[100%]   bg-[#27292e] flex justify-around items-center text-center text-[#ffffff] text-2xl roboto rounded-lg">
          <div
            className={` ${check === "punctuation" ? "text-[#1fc8c5]" : ""
              }  cursor-pointer hover:text-[#1fc8c5] duration-300`}
            onClick={handlePunctuation}
          >
            @ Punctuation
          </div>
          <div
            className={` ${check === "numbers" ? "text-[#1fc8c5]" : ""
              }   cursor-pointer hover:text-[#1fc8c5] duration-300`}
            onClick={handleNumbers}
          >
            Numbers
          </div>
          <div
            className={`  ${check === "scharacters" ? "text-[#1fc8c5]" : ""
              }   cursor-pointer hover:text-[#1fc8c5] duration-300`}
            onClick={handleSpecialCharacters}
          >
            % Special Characters
          </div>
          <div
            className={`cursor-pointer flex items-center justify-between  ${isClicked === true ? "w-[30%]" : ""
              } `}
            onClick={clockClicked}
            onMouseEnter={handleMouseEnterClock}
            onMouseLeave={handleMouseLeaveClock}
          >
            {" "}
            {clockColor === false ? (
              <>
                <img src={Clock} alt="" />
              </>
            ) : (
              <>
                <img src={Clock_2} alt="" />
              </>
            )}
            {isClicked === true ? (
              <>
                {" "}
                <div className="text-4xl">|</div>
                <div
                  className={`roboto hover:text-[#1fc8c5] duration-300   ${check === "fifteenSecs" ? "text-[#1fc8c5]" : ""
                    }`}
                  onClick={fifteenSecs}
                >
                  15
                </div>
                <div
                  className={`roboto hover:text-[#1fc8c5] duration-300  ${check === "thirtySecs" ? "text-[#1fc8c5]" : ""
                    } `}
                  onClick={thirtySecs}
                >
                  30
                </div>
                <div
                  className={`roboto hover:text-[#1fc8c5] duration-300  ${check === "fourtySecs" ? "text-[#1fc8c5]" : ""
                    } `}
                  onClick={fourtySecs}
                >
                  45
                </div>
                <div
                  className={`roboto hover:text-[#1fc8c5] duration-300  ${check === "fiftySecs" ? "text-[#1fc8c5]" : ""
                    } `}
                  onClick={fiftySecs}
                >
                  60
                </div>{" "}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
