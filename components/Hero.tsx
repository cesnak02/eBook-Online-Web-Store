import Image from "next/image";
import React from "react";
const Hero = () => {
  return (
    <div className="h-[700px] w-full bg-gray-500 max-lg:h-[900px] max-md:h-[750px]">
      <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10">
        <div className="flex flex-col gap-y-5 max-lg:order-last col-span-2">
          <h1 className="text-6xl text-white font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
            THE ONLINE BOOK STORE
          </h1>
          <p className="text-white max-sm:text-sm">
     Welcome to your next great read! Discover a wide selection of books —
     from bestselling novels to timeless classics.
     Whether you're into fiction, non-fiction,
     or children's books, 
     we've got something for everyone.
</p>

        </div>
        <Image
          src="/books-banner.png"
          width={800}
          height={800}
          alt="smart watch"
          className="max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
