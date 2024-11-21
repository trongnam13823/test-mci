import Title from "@/components/Title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function EventList({ events }) {
  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="flex flex-col gap-10 h-full lg:bg-transparent bg-[#F2F0F0] lg:mx-0 lg:p-0 p-8 lg:py-0 py-16">
      {/* Title */}
      <div className="flex justify-start">
        <Title text="Sự kiện của MCI" center={false} />
      </div>

      {/* Carousel */}
      <Carousel setApi={setApi} className="flex-1">
        <CarouselContent className="h-full">
          {events.map((_, index) => {
            if (index % 3 === 0)
              return (
                <CarouselItem key={index}>
                  <div className="p-1 space-y-10 flex flex-col h-full">
                    <img
                      src={`https://placehold.co/800x400/F1692F/F1692F`}
                      alt="event"
                      height={300}
                      className="w-full flex-1 object-cover rounded-[20px]"
                    />
                    <img
                      src={`https://placehold.co/800x400/F1692F/F1692F`}
                      alt="event"
                      height={300}
                      className="w-full flex-1 object-cover rounded-[20px]"
                    />
                    <img
                      src={`https://placehold.co/800x400/F1692F/F1692F`}
                      alt="event"
                      height={300}
                      className="w-full flex-1 object-cover rounded-[20px]"
                    />
                  </div>
                </CarouselItem>
              );
          })}
        </CarouselContent>
      </Carousel>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <ChevronLeft
          size={38}
          cursor="pointer"
          onClick={() => api.scrollPrev()}
        />

        {/* Dots */}
        {events.map((_, index) => {
          if (index % 3 === 0) {
            const currentIndex = Math.ceil((index) / 3)

            return (
              <div
                key={index}
                className={`size-6 rounded-full cursor-pointer ${current === currentIndex ? "bg-primary" : "bg-[#D9D9D9]"}`}
                onClick={() => api.scrollTo(currentIndex)}
              />
            );
          }
        })}

        <ChevronRight
          size={38}
          cursor="pointer"
          onClick={() => api.scrollNext()}
        />
      </div>
    </div>
  )
}