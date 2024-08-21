import { StarIcon } from "../weather-info/ui/star-icon";

export function Star({ isFavorite, weather, setFavorites, setIsFavorite }) {
  return (
    <StarIcon
      className="absolute right-1.5 top-2"
      isFavorite={isFavorite}
      onClick={() => {
        let existingFavorites =
          JSON.parse(localStorage.getItem("favorites")) || [];

        if (!isFavorite) {
          const newFavorite = {
            name: weather.name,
            main: {
              temp: weather.main.temp,
              humidity: weather.main.humidity,
            },
            weather: [
              {
                description: weather.weather[0].description,
                icon: weather.weather[0].icon,
              },
            ],
            wind: {
              speed: weather.wind.speed,
            },
            id: weather.id,
          };

          existingFavorites.push(newFavorite);
          setFavorites(existingFavorites);

          localStorage.setItem("favorites", JSON.stringify(existingFavorites));
        } else {
          existingFavorites = existingFavorites.filter(
            (fav) => fav.id !== weather.id
          );

          setFavorites(existingFavorites);
          localStorage.setItem("favorites", JSON.stringify(existingFavorites));
        }
        setIsFavorite(!isFavorite);
      }}
    />
  );
}
