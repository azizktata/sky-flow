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
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-linear"></div>
                {/* <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div> */}
              </div>
              <CardBody className="absolute inset-0 mb-16 ml-4 lg:ml-14 z-10 flex items-start justify-center">
                <div className="mt-12 flex flex-col items-start w-auto mb-6">
                  <h1 className="mb-6 max-w-md xl:max-w-2xl font-bold text-4xl sm:text-4xl xl:text-5xl text-white leading-snug tracking-wider">
                    connecter les marchés internationaux
                  </h1>
                  <p className="text-base lg:text-lg text-gray-100 font-light mb-4 max-w-xs sm:max-w-lg leading-relaxed tracking-wide">
                    Nous proposons des services d&apos;
                    <span className="text-[#007BFF] font-medium">
                      Importation
                    </span>{" "}
                    et d&apos;
                    <span className="text-[#F15BB5] font-medium">
                      Exportation
                    </span>{" "}
                    de produits variés, avec une portée mondiale.
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
