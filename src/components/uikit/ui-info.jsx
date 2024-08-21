import Image from "next/image";

export function UiInfo({ bgColorWeather, starIcon, weather }) {
  return (
    <div
      className={`${bgColorWeather} mt-5 p-5 rounded-lg shadow-md flex flex-col gap-3 relative`}
    >
      {starIcon}
      <h1 className="text-lg font-medium mx-auto">Weather in {weather.name}</h1>
      <p className="p-2 bg-amber-200">Temperature: {weather.main.temp}°C</p>
      <p className="p-2 bg-amber-200 flex items-center gap-1">
        Weather: {weather.weather[0].description}
        <Image
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          width={50}
          height={50}
          alt={weather.weather[0].description}
        />
      </p>
      <p className="p-2 bg-amber-200">Humidity: {weather.main.humidity}%</p>
      <p className="p-2 bg-amber-200">Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}
