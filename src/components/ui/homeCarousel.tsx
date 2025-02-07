"use client";

import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
export default function HomeCarousel({
  carousel,
}: {
  carousel: { title: string; description: string; images: string[] };
}) {
  // const plugin = React.useRef(Autoplay({ delay: 3000 }));
  // const images = ["/cover-1.webp", "/cover-2.webp", "/cover-3.webp"];
  const carouselImages = Object.values(carousel.images);
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <Carousel
      plugins={[Autoplay({ delay: 3000 })]}
      className="w-full  "
      setApi={setApi}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="">
        {carouselImages.map((img, index) => (
          <CarouselItem
            onMouseEnter={() => api!.plugins().autoplay?.stop()}
            onMouseLeave={() => api!.plugins().autoplay?.play()}
            className=""
            key={index}
          >
            <Card radius="none" className="h-[650px] ">
              <div className="relative w-full h-full overflow-hidden bg-gray-100">
                <Image
                  alt="Card background"
                  className="z-0 w-full h-full object-cover"
                  fill
                  src={img}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-linear"></div>
                {/* <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div> */}
              </div>
              <CardBody className="absolute inset-0 mb-16 ml-4 xl:ml-24 lg:ml-14 z-10 flex items-start justify-center">
                <div className="mt-12 flex flex-col items-start w-auto mb-6">
                  <h1 className="mb-6 max-w-md xl:max-w-3xl font-bold text-4xl sm:text-4xl xl:text-6xl text-white leading-snug tracking-wide border-l-4 border-[#1F7AAE] pl-2">
                    {carousel.title}
                  </h1>
                  <p className="text-base lg:text-lg ml-4 text-gray-100 font-light mb-4 max-w-xs sm:max-w-lg leading-relaxed tracking-wide ">
                    {carousel.description}
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
