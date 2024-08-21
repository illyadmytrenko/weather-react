import axios from "axios";
import { useEffect, useState } from "react";
import { UiInfo } from "../uikit/ui-info";
import { Star } from "../uikit/star";

export function WeatherInfo({
  city,
  error,
  setError,
  setFavorites,
  isFavorite,
  setIsFavorite,
}) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!city) return;
    const fetchWeather = async () => {
      try {
        setError(null);
        setWeather(null);

        const apiKey = "6e40ce273d8c496f364f9ca3db84232d";

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        setWeather(response.data);

        const existingFavorites =
          JSON.parse(localStorage.getItem("favorites")) || [];
        const isAlreadyFavorite = existingFavorites.some(
          (fav) => fav.id === response.data.id
        );

        setIsFavorite(isAlreadyFavorite);
      } catch (err) {
        setError("Place was not found");
      }
    };

    fetchWeather();
  }, [city]);

  if (error) {
    return <p className="text-red-600 mt-1 font-bold">{error}</p>;
  }

  if (!weather) {
    return;
  }
  console.log(weather);

  const bgColorWeather =
    weather.main.temp > 15 ? "bg-orange-500" : "bg-blue-500";

  return (
    <UiInfo
      bgColorWeather={bgColorWeather}
      weather={weather}
      starIcon={
        <Star
          isFavorite={isFavorite}
          weather={weather}
          setFavorites={setFavorites}
          setIsFavorite={setIsFavorite}
        />
      }
    />
  );
}
