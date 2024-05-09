import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import BarChart from "../assets/bar-chart.png";
import LineChart from "../assets/line-chart.png";
import gitHub from "../assets/code.png";
import { Link } from "react-router-dom";
import retry from "../assets/002-refresh.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  Chart as chartjs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,

  Legend
);

const ShowChart = (props) => {
  // Log the wrong indexes
  const dispatch = useDispatch();
  const check = useSelector((store) => store.check);

  useEffect(() => {
    if (check === "RETRY") {
      setshowChart(false);
      setWMPinfo(0);
    }
  }, [check]);

  // Initialize arrays for labels and data
  const arrayLabel = [];
  const dataLabel = [];
  const crossLabel = [];

  // Fill arrayLabel with indices
  for (let i = 1; i < props.eachsecWPM.length; i++) {
    arrayLabel.push(i);
  }

  // Fill dataLabel with props.eachsecWPM values
  for (let i = 1; i < props.eachsecWPM.length; i++) {
    dataLabel.push(props.eachsecWPM[i]);
  }

  // Fill crossLabel with props.eachsecWrongIndexes values
  for (let i = 1; i < props.eachsecWrongIndexes.length; i++) {
    crossLabel[i] =
      props.eachsecWrongIndexes[i] === 0 ? null : props.eachsecWrongIndexes[i];
  }
  const [WMPinfo, setWMPinfo] = useState(0);
  useEffect(() => {
    setWMPinfo((props.totalWords / (props.eachsecWPM.length / 60)).toFixed(2));
  }, []);

  // Log crossLabel

  // Define options for the chart
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (seconds)",
          font: {
            size: 18,
            weight: "bold",
          },
        },
        // Other x-axis configurations...
      },
      y: {
        title: {
          display: true,
          text: "Characters Per Second",
          font: {
            size: 18,
            weight: "bold",
          },
        },
        min: 0,
        max: 12,
        ticks: {
          stepSize: 2,
          callback: function (value, index, values) {
            // Display only 2, 4, and 6 on the y-axis
            if (value === 2 || value === 4 || value === 6) {
              return value;
            } else {
              return ""; // Hide other values
            }
          },
        },
      },
    },
    plugins: {
      tooltip: {
        mode: "index", // Show tooltips when hovering over any data point along the x-axis
        intersect: false,
      },
      legend: {
        display: true,

        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    elements: {
      point: {
        radius: 2,
        borderWidth: 2,
        hoverRadius: 12,
        hoverBorderWidth: 2,
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 10,
        bottom: 10,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    backgroundColor: "#323437", // Set background color to transparent
  };

  const optionsBarChart = {
    scales: {
      x: {
        // Other x-axis configurations...
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 50,
          callback: function (value, index, values) {
            // Display only 2, 4, and 6 on the y-axis
            if (value === 2 || value === 4 || value === 6) {
              return value;
            } else {
              return ""; // Hide other values
            }
          },
        },
      },
    },
    plugins: {
      tooltip: {
        mode: "index", // Show tooltips when hovering over any data point along the x-axis
        intersect: false,
      },
      legend: {
        display: true,
        labels: {
          font: {
            size: 20,
            weight: "bold",
          },
        },
      },
    },
    elements: {
      // Customize elements here
    },
    layout: {
      // Adjust layout if needed
    },
    responsive: true,
    maintainAspectRatio: false,
    backgroundColor: "#323437", // Set background color to transparent
  };
  // Define data for the chart
  const LineChartData = {
    labels: arrayLabel,
    datasets: [
      {
        label: "Typing Speed",
        data: dataLabel,
        borderColor: "#1FC8C5",
        pointStyle: "none",
        tension: 0.5,
      },
      {
        label: "Mistakes",
        data: crossLabel,
        showLine: false,
        pointStyle: "crossRot",
        pointBorderColor: "#EE6056",
        borderColor: "#EE6056",
        pointRadius: 10, // Adjust the size of the crosses
      },
    ],
  };

  const barChartData = {
    labels: ["WPM", "Accuracy", "Mistakes"],
    datasets: [
      {
        label: "Words Per Minute",
        data: [WMPinfo, props.accuracy, props.incorrectIndexes.length],
        backgroundColor: ["#4CDBC4", "#FFD15C", "#EE6056"],
      },
    ],
  };

  const [showChart, setshowChart] = useState(false);
  const showLineChart = () => {
    setshowChart(true);
  };
  const showBarChart = () => {
    setshowChart(false);
  };

  // Return the chart component
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className=" w-[10%] h-full  flex flex-col items-center justify-evenly  ">
        <div className="w-full h-auto ">
          <div className="w-full h-full ">
            <img
              id="lineChart"
              onClick={showBarChart}
              src={LineChart}
              alt=""
              title="Line-Chart"
              className={` hover:w-[50%] duration-300 cursor-pointer  ${
                showChart === true
                  ? "opacity-1 w-[40%] h-auto  "
                  : " w-0 h-0 opacity-0 "
              }`}
            />
            <img
              id="barChart"
              onClick={showLineChart}
              src={BarChart}
              alt=""
              title="Bar-Chart"
              className={` hover:w-[60%] duration-300 cursor-pointer   ${
                showChart === true
                  ? "opacity-0 w-0 h-0 "
                  : "opacity-1 w-1/2 h-auto "
              } `}
            />
          </div>
        </div>

        <div className="w-full h-[15%] ">
          <Link to="https://github.com/AhsanAli2030/RapidType">
            <img
              title="Source-Code"
              src={gitHub}
              alt=""
              className=" w-1/2 h-auto hover:w-[60%] duration-300 cursor-pointer"
            />
          </Link>
        </div>

        <div className="w-[80%] h-[15%] flex items-center ">
          <img
            title="Re-Try"
            onClick={() => {
              dispatch({ type: "RETRY" });
            }}
            src={retry}
            alt=""
            className=" w-[30%] h-auto hover:w-[40%] duration-300 cursor-pointer"
          />
        </div>
      </div>

      <div className="w-[70%] h-[70%]  flex roboto text-[#EE6056] text-xl font-bold">
        <div className="flex flex-col items-center justify-around">
          <div>
            <div className="border-b-2 border-[#EE6056]">WPM</div>
            <div className="text-[#ffffff] text-5xl">{WMPinfo}</div>
          </div>
          <div>
            <div className="border-b-2 border-[#EE6056]">Accuracy</div>
            <div className="text-[#ffffff] text-5xl">{props.accuracy}</div>
          </div>
        </div>
        <div className="w-full h-full">
          <div
            className={`duration-300  ${
              showChart === true ? "w-0 h-0 overflow-hidden" : "w-full h-full "
            }`}
          >
            <Line options={options} data={LineChartData}></Line>
          </div>

          <div
            className={`duration-300  ${
              showChart === true ? "w-full h-full" : "w-0 h-0 overflow-hidden "
            }`}
          >
            <Bar options={optionsBarChart} data={barChartData} />
          </div>

          <div className="flex items-center justify-around">
            <div>
              <div className="border-b-2 border-[#EE6056]">Words Typed</div>
              <div className="text-[#ffffff] text-5xl">{props.totalWords}</div>
            </div>
            <div>
              <div className="border-b-2 border-[#EE6056]">
                Total Characters
              </div>
              <div className="text-[#ffffff] text-5xl">
                {props.totalCharacters}
              </div>
            </div>
            <div>
              <div className="border-b-2 border-[#EE6056]">Mistakes</div>
              <div className="text-[#ffffff] text-5xl">
                {props.incorrectIndexes.length}
              </div>
            </div>
            <div>
              <div className="border-b-2 border-[#EE6056]">Time</div>
              <div className="text-[#ffffff] text-5xl">
                {arrayLabel.length} sec
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowChart;
