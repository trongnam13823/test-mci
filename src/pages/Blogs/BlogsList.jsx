import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import BlogItem from "./BlogItem";
import BlogFilter from "@/components/BlogFilter";


export default function BlogsList({ blogs }) {
  const [api, setApi] = useState()

  return (
    <div className="flex flex-col lg:p-0 px-8 lg:py-0 py-16">
      {/* Blog Filter */}
      <BlogFilter />

      {/* Blogs Desktop */}
      <div className="flex-col flex-1 mt-14 gap-[20px] lg:flex hidden">
        {blogs.map((_, index) => (
          <BlogItem key={index} />
        ))}
      </div>

      {/* Blogs Mobile */}
      <div className="flex-col flex-1 mt-8 gap-[20px] lg:hidden flex">
        {/* Carousel */}
        <Carousel setApi={setApi}>
          <CarouselContent>
            {blogs.map((_, index) => <CarouselItem key={index}> <BlogItem /> </CarouselItem>)}
          </CarouselContent>

          <ChevronLeft size={38}
            cursor="pointer"
            onClick={() => api.scrollPrev()} 
            className="absolute -left-8 top-1/2 -translate-y-1/2" 
          />

          <ChevronRight size={38}
            cursor="pointer"
            onClick={() => api.scrollNext()} 
            className="absolute -right-8 top-1/2 -translate-y-1/2" 
          />
        </Carousel>
      </div>
    </div>
  )
}