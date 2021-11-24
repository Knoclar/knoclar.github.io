import React from "react";

export default function GifButton({ gif }) {
  return (
    <a className="copiable h-auto flex justify-center bg-white border border-indigo-100 p-2 shadow-sm rounded-md hover:ring-2 hover:ring-indigo-300 hover:ring-offset-2 transition" href="#">
      <img className="w-auto" src={gif.imgUrl} alt={gif.imgAlt} />
    </a>
  );
}
