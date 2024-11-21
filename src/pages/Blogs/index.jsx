import EventList from "./EventList";
import BlogsList from "./BlogsList";
import Gallery from "./Gallery";
import Programs from "./Programs";
export default function Blogs() {
  return (
    <>
      {/* Banner */}
      <div>
        <img
          className="w-full object-cover md:block hidden"
          src="/banner-desktop.jpg"
          alt="banner"
        />
        <img
          className="w-full object-cover md:hidden block"
          src="/banner-mobile.jpg"
          alt="banner"
        />
      </div>

      {/* Events and Blogs */}
      <div className="flex lg:gap-12 lg:py-16 lg:flex-row flex-col-reverse 2xl:max-w-screen-2xl mx-auto lg:px-8">
        {/* events */}
        <div className="lg:w-[40%]">
          <EventList events={Array.from({ length: 15 })} />
        </div>

        {/* blogs */}
        <div className="lg:w-[60%]">
          <BlogsList blogs={Array.from({ length: 5 })} />
        </div>
      </div>

      {/* Gallery */}
      <Gallery />

      {/* Programs */}
      <Programs />
    </>
  );
}
