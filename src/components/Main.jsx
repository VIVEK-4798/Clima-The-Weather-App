import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [inputCity, setInputCity] = useState('');
  const [city, setCity] = useState('');
  const [location, setLocation]  = useState({});
  const [loading, setLoading] = useState(false);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [error, setError] = useState(''); 

  const navigate = useNavigate();

  useEffect(() => {
    if(city) {
      setLoading(true);
      setError(''); 
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f21b9773b0227972073a982ce5667ea`)
        .then(response => {
          setLocation(response.data); 
          setLoading(false);
          setShouldNavigate(true);
        })
        .catch(error => {
          setLoading(false);
          setError('No Results Found'); 
          console.error(error);
        });
    }
  }, [city, navigate]);  

  useEffect(() => {
    if(shouldNavigate){
      navigate("/content", {state: {location}});
    }
  }, [shouldNavigate, navigate]);

  const handleInputCity = (event) => {
    setInputCity(event.target.value);
  }

  const handleButtonClick = () => {
    setCity(inputCity);
  }

  console.log(inputCity);
  console.log(location);

  return (
    <>
      <div className="bg-image-main w-svw h-svh flex justify-center items-center">
        <div className="w-1/4  h-1/4 bg-white opacity-45 flex flex-col justify-around items-center rounded-3xl max-sm:w-[350px] max-sm:h-60 max-lg:w-[450px]">
          <h1 className="text-black text-3xl font-extrabold ">Clima: The Weather App</h1>
          <div className="flex flex-col justify-evenly h-1/3 items-center mb-12">
            <input
              className="bg-slate-900 w-80 text-white opacity-100 
                         rounded-lg font-medium placeholder:italic placeholder:text-slate-100 py-2 pl-24 pr-3"
              placeholder="Enter the City name"
              type="text"
              value={inputCity}
              onChange={handleInputCity}
            />
            <button className="bg-slate-800  w-20 rounded-lg py-1 pl-3 pr-3 
                            font-bold text-slate-200 hover:bg-stone-400 
                            hover:text-slate-950 mt-2 max-sm:mt-3"
                            onClick={handleButtonClick}>
                              Search
            </button>
            {loading && <p className=" text-black text-xl font-bold mt-5">Loading...</p>} 
            {error && <p className=" text-black text-xl font-bold  mt-5">{error}</p>} 
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
