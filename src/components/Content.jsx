import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faDroplet,
  faWater,
  faArrowDownShortWide,
  faArrowUpWideShort,
  faTemperatureArrowUp,
  faTemperatureArrowDown,
  faArrowUpRightDots,
  faLocationDot,
  faCalendar,
  faClock,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import Clock from "./Clock";

const Content = () => {
  const locationState = useLocation();
  const location = locationState.state?.location;

  const { name, main, wind, weather, visibility, coord} = location;

  // To get the today's Date for the weather data
  const today = new Date();
  const formattedDate = `${today.getDate().toString().padStart(2, "0")}.${(
    today.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${today.getFullYear()}`;

  // To capitalize the first letter of the weather.description.
  const capitalizeFirstLetter = (string) => {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const weatherDescription = capitalizeFirstLetter(weather[0].description);


  return (
    <>
      <div className="bg-image-content bg-image h-[100vh] flex justify-center items-center max-2xl:bg-image-mobilebg max-2xl:bg-cover max-2xl:bg-no-repeat">
        <div className="w-7/12 h-3/5 bg-slate-700 opacity-70 flex justify-center items-center rounded-2xl max-2xl:w-[350px] max-2xl:h-3/4">
          <div className="parent Main w-8/12 h-4/5 bg-white bg-opacity-70 rounded-l-3xl 2xl:h-5/6 max-2xl:rounded-3xl max-2xl:w-10/12">
            <div className="flex w-3/5 justify-between pl-16 pt-4 text-black text-lg font-bold max-2xl:w-full max-2xl:pl-5 max-2xl:pr-3 ">
              <h3> <FontAwesomeIcon icon={faLocationDot} /> {name}</h3>
              <p> <FontAwesomeIcon icon={faCalendar} /> {formattedDate}</p>
            </div>
            <p className= "lg:hidden text-black text-[24px] max-2xl:w-72 font-medium pt-2 flex items-center max-2xl:justify-center ">
            <FontAwesomeIcon icon={faClock} size="xs" className="max-lg:pr-1 max-lg:pt-[3px]"/>  <Clock />
            </p>
            <div className="flex">
              <h1 className="text-black text-9xl font-medium w-52 pl-72 pt-14 max-2xl:pl-16 max-2xl:pt-9">
                {Math.round(main.temp - 273.15)}&deg;
              </h1>
              <div className="flex flex-col pl-48 max-2xl:hidden">
                <p className="pt-28 max-2xl:pt-0">
                  <FontAwesomeIcon icon={faWind} size="lg" />
                </p>
                <p className="pt-1">
                  <FontAwesomeIcon icon={faDroplet} size="lg" />
                </p>
              </div>
              <div className="flex flex-col pl-5 max-2xl:hidden">
                <p className="pt-28 font-bold max-2xl:pt-0">{wind.speed}</p>
                <p className="pt-1 font-bold">{main.humidity} %</p>
              </div>
            </div>
            <br />
            <p className="text-black text-1xs  font-medium 2xl:hidden max-2xl:pl-[102px]">Feels Like {Math.round(main.feels_like - 273)}&deg;</p>
            <p className="text-black text-2xl font-lg pl-[265px] font-medium max-2xl:pl-16 max-2xl:pt-2">
              {weatherDescription}
            </p>
            <p className="text-black text-lg  font-semibold 2xl:hidden max-2xl:pt-8 max-2xl:pl-[70px]">
              <FontAwesomeIcon icon={faTemperatureArrowUp} /> Max. Temp - {Math.round(main.temp_max - 273)}&deg;
            </p>
            <br/>
            <p className="text-black text-lg  font-semibold 2xl:hidden  max-2xl:pl-[70px]">
              <FontAwesomeIcon icon={faTemperatureArrowDown} /> Min. Temp - {Math.round(main.temp_min - 273)}&deg;
            </p>
            <p className="text-black text-lg  font-semibold 2xl:hidden max-2xl:mt-3 max-2xl:pl-[70px]"> <FontAwesomeIcon icon={faEyeSlash} /> Visibility - {(visibility)/1000} miles</p>
           
            <div className="max-2xl:hidden SeaReport pt-8 pl-5 max-2xl:flex-col max-2xl:bg-image-mobilebg max-2xl:mt-[174px]">
              <h1 className="font-bold text-3xl text-center underline ">
                Sea Forecast Report
              </h1>
              <div className="otherthanh1 flex justify-evenly mt-7 max-2xl:flex max-2xl:flex-col ">
                <div className="first3 ">
                  <p className="flex text-lg font-semibold whitespace-break-spaces max-2xl:pt-2">
                    <FontAwesomeIcon icon={faDroplet} size="lg" />     Humidity:              {main.humidity} %
                  </p>
                  <p className="flex pt-4 text-lg font-semibold whitespace-break-spaces max-2xl:pt-5">
                  <FontAwesomeIcon icon={faArrowUpRightDots} size="lg"/>   Ground level:        {main.grnd_level}
                  </p>
                  <p className="flex pt-4 text-lg  font-semibold whitespace-break-spaces max-2xl:pt-5">
                    <FontAwesomeIcon icon={faWater} size="lg" />   Sea level:              {main.sea_level} hPa
                  </p>
                </div>
                <div className="second3">
                  <p className="flex text-lg font-semibold whitespace-break-spaces max-2xl:pt-5">
                  <FontAwesomeIcon icon={faArrowUpWideShort} size="lg" />   Wind degree:            {wind.deg}&deg;
                  </p>
                  <p className="flex pt-4 text-lg font-semibold whitespace-break-spaces max-2xl:pt-5">
                  <FontAwesomeIcon icon={faArrowDownShortWide} size="lg" />   Air Pressure:             {main.pressure} hPa
                  </p>
                  <p className="flex pt-4 text-lg font-semibold whitespace-break-spaces max-2xl:pt-5">
                    <FontAwesomeIcon icon={faWind} size="lg" />   Wind Speed:             {wind.speed} mph
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" SideBar w-3/12 h-[560px] bg-slate-400 bg-opacity-100 rounded-r-3xl flex flex-col items-center max-2xl:h-5/6 max-2xl:hidden">
            <p className="text-black text-[26px] font-bold pt-2 underline">
              Weather Report
            </p>
            <p className= " text-black text-[26px] w-36 font-medium pt-2 flex items-center justify-between">
            <FontAwesomeIcon icon={faClock} size="xs" className="mt-[3px]"/>  <Clock />
            </p>
            <div className="flex justify-between max-2xl:hidden">
              <h1 className="text-black text-6xl font-medium w-1/4  pt-8">
                {Math.round(main.temp - 273.15)}&deg;
              </h1>
              <div className="flex ">
                <div className="flex flex-col pt-10 pl-4">
                  <p className="">
                    <FontAwesomeIcon icon={faWind} size="xs" />
                  </p>
                  <p className="">
                    <FontAwesomeIcon icon={faDroplet} size="xs" />
                  </p>
                </div>
                <div className="flex flex-col pl-2 pt-2">
                  <p className=" font-bold text-xs pt-9">{wind.speed}</p>
                  <p className=" font-bold text-xs pt-2">{main.humidity} %</p>
                </div>
              </div>
            </div>
            <br/>
            <p className="text-black text-1xs font-medium">Feels Like {Math.round(main.feels_like - 273)}&deg;</p>
            <p className="text-black text-1xl font-medium pt-2 ">
              {weatherDescription}
            </p>
            <br/>
            <p className="text-black text-lg  font-semibold">
              <FontAwesomeIcon icon={faTemperatureArrowUp} /> Max. Temp - {Math.round(main.temp_max - 273)}&deg;
            </p>
            <br/>
            <p className="text-black text-lg  font-semibold">
              <FontAwesomeIcon icon={faTemperatureArrowDown} /> Min. Temp - {Math.round(main.temp_min - 273)}&deg;
            </p>
            <br/>
            <p className="text-black text-lg  font-semibold"> <FontAwesomeIcon icon={faEyeSlash} /> Visibility - {(visibility)/1000} miles</p>
            <br/>
            <p className="text-black text-lg  font-semibold">Latitude:  {coord.lat}</p>
            <p className="text-black text-lg  font-semibold">Longitude:  {coord.lon}</p>
          </div>
        </div>
      </div>
      <div className="2xl:hidden SeaReport max-2xl:h-[700px] max-2xl:flex max-2xl:justify-center max-2xl:items-center max-2xl:flex-col max-2xl:bg-image-mobilebg max-2xl:mt-0 max-2xl:bg-cover max-2xl:bg-no-repeat ">
        <div className="w-7/12 h-3/5 bg-slate-700 opacity-70 flex justify-center items-center rounded-2xl max-2xl:w-[350px] max-2xl:h-[600px] max-2xl:ml-5">
        <div className="parent Main w-8/12 h-4/5 bg-white bg-opacity-70 rounded-l-3xl max-2xl:h-[500px] max-2xl:rounded-3xl max-2xl:w-10/12">
              <h1 className="font-bold text-2xl text-center underline mt-5">
                Sea Forecast Report
              </h1>
              <div className="otherthanh1 flex justify-evenly mt-7 max-2xl:flex max-2xl:flex-col max-2xl:items-center">
                <div className="first3 ">
                  <p className="flex text-lg font-semibold whitespace-break-spaces max-2xl:pt-2">
                    <FontAwesomeIcon icon={faDroplet} size="lg" />     Humidity:                  {main.humidity} %
                  </p>
                  <p className="flex pt-4 text-lg font-semibold whitespace-break-spaces max-2xl:pt-5">
                  <FontAwesomeIcon icon={faArrowUpRightDots} size="lg"/>   Ground level:           {main.grnd_level}
                  </p> 
                  <p className="flex pt-4 text-lg  font-semibold whitespace-break-spaces max-2xl:pt-5">
                    <FontAwesomeIcon icon={faWater} size="lg" />   Sea level:                  {main.sea_level} hPa
                  </p>
                </div>
                <div className="second3 max-2xl:pl-1.5">
                  <p className="flex text-lg font-semibold whitespace-break-spaces max-2xl:pt-5 ">
                  <FontAwesomeIcon icon={faArrowUpWideShort} size="lg" />   Wind degree:            {wind.deg}&deg;
                  </p>
                  <p className="flex pt-4 text-lg font-semibold whitespace-break-spaces max-2xl:pt-5">
                  <FontAwesomeIcon icon={faArrowDownShortWide} size="lg" />   Air Pressure:            {main.pressure} hPa
                  </p>
                  <p className="flex pt-4 text-lg font-semibold whitespace-break-spaces max-2xl:pt-5 max-2xl:mb-12">
                    <FontAwesomeIcon icon={faWind} size="lg" />   Wind Speed:              {wind.speed} mph
                  </p>
                </div>
                <p className="text-black text-lg  font-semibold">Latitude:  {coord.lat}</p>
                <p className="text-black text-lg  font-semibold">Longitude:  {coord.lon}</p>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Content;
