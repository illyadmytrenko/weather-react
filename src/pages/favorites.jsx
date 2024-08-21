import { UiButton } from "@/components/uikit/ui-button";
import { UiInfo } from "@/components/uikit/ui-info";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Star } from "@/components/uikit/star";
import { useFavorites } from "@/components/context";

export default function FavoritesPage() {
  const { favorites, setFavorites, setIsFavorite } = useFavorites();

  const router = useRouter();

  const handleClickReturn = () => {
    router.push("/");
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        setFavorites(parsedFavorites);
      } catch (error) {
        console.error("Error parsing favorites:", error);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-3xl font-extrabold mt-5">Your Favorite Places</h1>
      <ul className="flex gap-5 max-w-screen flex-wrap px-8 justify-center">
        {favorites.map((favorite) => (
          <li key={favorite.id} className="flex-auto basis-auto">
            <UiInfo
              bgColorWeather={
                favorite.main.temp > 15 ? "bg-orange-500" : "bg-blue-500"
              }
              starIcon={
                <Star
                  isFavorite={true}
                  weather={favorite}
                  setFavorites={setFavorites}
                  setIsFavorite={setIsFavorite}
                />
              }
              weather={favorite}
            />
          </li>
        ))}
      </ul>
      <UiButton
        size="md"
        variant="orange"
        className="mt-4 mb-5"
        onClick={handleClickReturn}
      >
        Return
      </UiButton>
    </div>
  );
}
