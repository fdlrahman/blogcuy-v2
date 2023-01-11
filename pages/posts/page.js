import React from "react";
import Format from "../../src/layout/format";
import Author from "../../src/components/_child/author";
import Image from "next/image";
import Related from "../../src/components/_child/related";

function Page() {
  return (
    <>
      <Format>
        <section className="container mx-auto py-14 px-4 md:w-1/2">
          <div className="flex justify-center">
            <Author></Author>
          </div>

          <div className="post py-10">
            <h1 className="font-bold text-4xl text-center pb-3">
              Your most unhappy customers are your greatest source of learning
            </h1>

            <p className="text-gray-500 text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="py-10">
              <Image src={"/images/img1.jpg"} width={900} height={600}></Image>
            </div>

            <div className="content text-gray-600 flex flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur
              </p>
            </div>
          </div>

          <Related></Related>
        </section>
      </Format>
    </>
  );
}

export default Page;
