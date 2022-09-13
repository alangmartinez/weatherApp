import { createContext, useState } from "react";

export const weatherContext = createContext();

const weatherProvider = ({children}) => {
    const [weather, setWeather] = useState({});
    const API_Key = "2d2fa75c38f927368a5b7f44ea7c961f";


    const API_Call = ({location}) => {
        try {
          // We call the navigator object which is a prop inside the window object
          navigator.geolocation.getCurrentPosition((success) => {
            const { latitude, longitude } = success.coords;
    
            // Once we got the latitude and longitude from the navigator, we can make the request
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_Key}&units=metric&lang=es`
            )
              .then((res) => res.json())
              .then((data) => {
                setWeather(data);
              })
              .finally(() => setIsFetching(false));
          });
        } catch (e) {
          // If an error occurs we catch it and display it by console
          setErrorMessage(e.message);
        }
      };

    return(
        <weatherContext.Provider value={{weather}}>
            { children }
        </weatherContext.Provider>
    )
};

export default weatherProvider;