import { useState } from "react";
import { UiButton } from "../uikit/ui-button";
import { UiFieldInput } from "../uikit/ui-field-input";
import { UiFieldLabel } from "../uikit/ui-field-label";
import { useRouter } from "next/router";

export function WeatherSearch({ setCity, setError, setIsFavorite, favorites }) {
  const [input, setInput] = useState("");

  const router = useRouter();

  const handleClickToFavorites = () => {
    router.push("/favorites");
  };

  const handleSearch = () => {
    if (input === "") {
      setError("Enter a place!");
    }
    if (input.trim()) {
      setCity(input.trim());
    }
    setIsFavorite(false);
  };

  return (
    <div className="flex flex-col">
      <UiFieldLabel id="search" label="Enter the place" />
      <UiFieldInput
        type="text"
        value={input}
        id="search"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter place"
      />
      <div className="flex gap-5">
        <UiButton
          onClick={handleSearch}
          size="md"
          variant="lime"
          className="self-center mt-2"
        >
          Check Weather
        </UiButton>
        {favorites && favorites.length != 0 && (
          <UiButton
            onClick={handleClickToFavorites}
            size="md"
            variant="orange"
            className="self-center mt-2"
          >
            Check Favorites
          </UiButton>
        )}
      </div>
    </div>
  );
}
