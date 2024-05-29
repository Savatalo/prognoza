import axios from "axios";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [cityName, setCityName] = useState("");
  const [county, setCountry] = useState("");
  const [temp, setTemp] = useState("0");
  const [ws, setWs] = useState("0");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const getCity = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=a93765feafaf5c0033f001eba4a54b67`
      )
      .then((res) => {
        console.log(res.data);
        setCityName(res.data.name);
        setCountry(res.data.sys.country);
        setTemp(res.data.main.temp);
        setWs(res.data.wind.speed);
      })
      .catch((err) => {
        setCityName('Mi se ne bojimo, ucimo da brojimo. Ovde nece pisati error zato sto mi se moze i zato sto smaras.');
      });
  };

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Weather report</h1>
      <div className="main">
        <input type="text" onChange={handleChange} />
        <button className="submit-btn" onClick={getCity}>
          Submit
        </button>
        <h1>{cityName}</h1>
        <h1>{county}</h1>
        <h1>Temperature:{temp}F</h1>
        <h1>Wind speed:{ws}</h1>
      </div>
    </>
  );
}

export default App;
