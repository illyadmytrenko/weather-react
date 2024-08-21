import { useFavorites } from "@/components/context";
import { WeatherInfo } from "../components/weather-info";
import { WeatherSearch } from "../components/weather-search";
import { useState } from "react";

export default function HomePage() {
  const [city, setCity] = useState();
  const [error, setError] = useState();
  const { favorites, setFavorites, isFavorite, setIsFavorite } = useFavorites();

  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <WeatherSearch
        setCity={setCity}
        setError={setError}
        setIsFavorite={setIsFavorite}
        favorites={favorites}
      />
      <WeatherInfo
        city={city}
        setError={setError}
        error={error}
        setFavorites={setFavorites}
        isFavorite={isFavorite}
        setIsFavorite={setIsFavorite}
      />
    </main>
  );
}
