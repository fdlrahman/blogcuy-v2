import React from "react";
import Image from "next/image";

function author() {
  return (
    <div className="author flex py-4">
      <div className="image">
        <Image src={"/images/author/author1.jpg"} width={40} height={40} className="rounded-full" />
      </div>
      <div className="info mx-3 flex justify-center flex-col text-sm">
        <h1 className="font-bold text-gray-700">Flying High</h1>
        <p className="text-gray-500">CEO and Founder</p>
      </div>
    </div>
  );
}

export default author;
