"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Image } from "@nextui-org/image";

import { Card, CardBody } from "@nextui-org/card";
export default function HomeCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const images = ["/cover-1.jpg", "/cover-2.jpg", "/cover-3.jpg"];
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {images.map((img, index) => (
          <CarouselItem className="" key={index}>
            <Card radius="none" className="h-[550px] ">
              <div className="relative w-full h-full overflow-hidden bg-gray-100">
                <Image
                  removeWrapper
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  src={img}
                  loading="eager"
                  radius="none"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-linear"></div>
                {/* <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div> */}
              </div>
              <CardBody className="absolute inset-0 mb-16 ml-4 lg:ml-14 z-10 flex items-start justify-center">
                <div className="mt-12  flex flex-col items-start w-auto mb-6  ">
                  <h1 className="mb-4 max-w-md xl:max-w-xl font-semibold text-4xl sm:text-5xl  xl:text-6xl text-white  tracking-wider">
                    {" "}
                    Connecting Globally Through{" "}
                    <span className="text-[#004EB2]"> Import </span> &{" "}
                    <span className="text-[#C570B8]">Export</span> Solutions
                  </h1>
                  <p className="text-base lg:text-lg  text-gray-100 font-normal mb-4  max-w-xs sm:max-w-md tracking-widest">
                    your gateway way to global trade, offering imporiting &
                    exporting services your
                  </p>
                </div>
              </CardBody>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20  p-2 rounded-none bg-black/70 border-none text-white  hover:bg-white/40" />
      <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20  p-2  rounded-none bg-black/70 border-none text-white hover:bg-white/40" />
    </Carousel>
  );
}