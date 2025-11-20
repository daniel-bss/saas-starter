import { Card, CardContent } from "@/components/ui/card";
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
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {items.map((item, i) => (
          <CarouselItem key={i}>
            <div className="">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{i + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
