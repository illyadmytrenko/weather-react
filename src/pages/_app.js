import { FavoritesProvider } from "@/components/context";
import "@/styles/globals.css";
import clsx from "clsx";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin", "cyrillic"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={clsx(oswald.className, "text-slate-900 text-lg")}>
      <FavoritesProvider>
        <Component {...pageProps} />
      </FavoritesProvider>
    </div>
  );
}
