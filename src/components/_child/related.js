import React from "react";
import Link from "next/link";
import Author from "./author";

function Related() {
  return (
    <div>
      <h1 className="text-xl font-bold">Related</h1>

      <div className="posts py-4 flex flex-col gap-3">
        <Post />
        <Post />
      </div>
    </div>
  );
}

function Post() {
  const bg = {
    background: "url(/images/articles/img2.jpg) no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <div className="flex gap-3 my-4">
      <div className="image">
        <div className="bg-gray-500 w-40 h-32" style={bg}></div>
      </div>
      <div className="info">
        <div className="cat text-sm">
          <Link href={"/"} className="text-sky-600">
            Business, Travel
          </Link>
          <Link href={"/"} className="text-gray-800">
            - July 3, 2022
          </Link>
        </div>
        <div className="title">
          <Link href={"/"} className="font-bold text-1xl hover:text-gray-700">
            Your most unhappy customers are your greatest source of learning
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}

export default Related;
