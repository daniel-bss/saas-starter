import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AllianceCarouselItem } from "@/types";

export default function AlliancesCarousel({
  items,
}: {
  items: AllianceCarouselItem[];
}) {
  return (
    <Carousel
      className="w-full pb-6"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        {items.map((item, i) => (
          <CarouselItem key={i} className="basis-3/10 hover:cursor-pointer">
            {/**TODO: basis RESPONSIVE */}
            <div className="bg-black p-4 mt-4 border-2 border-black rounded-[10px] relative text-secondary hover:text-surface-25">
              <div className="bg-green-50 w-full min-h-[164px] h-full"></div>
              <div className="absolute bottom-0 left-0 right-0 text-center p-2 font-extrabold text-inherit">
                {item.name}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-[-25px]" />
      <CarouselNext className="right-[-25px]" />
    </Carousel>
  );
}

/**
235 x 164 
p-16px
mt-16
border-2px

 */
