import React from "react";
import onionHeadGifs from "./data/onionHeadGifs";
import GifButton from "./components/GifButton";

export default function App() {
  return (
    <div>
      <nav className="bg-white py-2 shadow-sm">
        <div className="flex flex-row items-center xl:max-w-3xl mx-auto justify-between">
          <div className="flex items-center">
            <img className="w-8" src="img/logo/logo-knoclar.svg" alt="" />
            <span className="text-3xl ml-3">Knoclar</span>
          </div>
          <h1 className="font-sans font-light text-3xl">Onion Head Gifs</h1>
        </div>
      </nav>

      <main className="grid grid-cols-10 xl:max-w-3xl m-auto mt-12 gap-3">
        {onionHeadGifs.map((gif) => (
          <GifButton gif={gif} key={gif.imgUrl} />
        ))}
      </main>
    </div>
  );
}
