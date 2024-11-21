import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import BlogItem from "@/pages/Blogs/BlogItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Title from "@/components/Title";

export default function BlogSuggest() {
  const [api, setApi] = useState()
  const blogs = Array.from({ length: 3 })

  return (
    <div className="max-w-screen-2xl mx-auto ">
      <Title text={'Các bài đăng liên quan'} />

      <div className="flex flex-col lg:p-0 lg:py-0 py-16">
        {/* Blogs Desktop */}
        <div className="mt-14 gap-8 lg:flex hidden">
          {blogs.map((_, index) => (
            <BlogItem rounded={false} key={index} vetical img="https://placehold.co/800x400/E87500/E87500" />
          ))}
        </div>

        {/* Blogs Mobile */}
        <div className="flex-col flex-1 mt-8 gap-[20px] lg:hidden flex">
          {/* Carousel */}
          <Carousel setApi={setApi}>
            <CarouselContent>
              {blogs.map((_, index) => <CarouselItem key={index}> <BlogItem key={index} vetical rounded={false} img="https://placehold.co/800x400/E87500/E87500" /> </CarouselItem>)}
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
    </div>
  )
}