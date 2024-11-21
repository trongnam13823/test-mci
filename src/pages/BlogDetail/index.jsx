import BlogFilter from "@/components/BlogFilter";

import FormConsulting from "@/pages/BlogDetail/FormConsulting";
import BlogContent from "@/pages/BlogDetail/BlogContent";
import BlogSuggest from "@/pages/BlogDetail/BlogSuggest";
import Courses from "@/pages/BlogDetail/Courses";
import BlogBreadcrumb from "@/pages/BlogDetail/BlogBreadcrumb";
// import { useEffect } from "react";
 
export default function BlogDetail() {
  
  // useEffect(() => {
  //   const headerElement = document.getElementById("header");
  //   const stickyElement = document.getElementById("sticky-container");
  //   const blogElement = document.getElementById("blog-container");

  //   const headerHeight = headerElement.offsetHeight;
  //   const stickyHeight = stickyElement.clientHeight;
  //   const stickyTop = stickyElement.offsetTop;
  //   const stickyLeft = stickyElement.offsetLeft;
  //   const blogBottom = blogElement.offsetTop + blogElement.offsetHeight;

  //   const handleScroll = () => {
  //     if (scrollY + headerHeight + 32 > stickyTop && scrollY + headerHeight + 32 + stickyHeight < blogBottom) {
  //       stickyElement.style.position = "fixed";
  //       stickyElement.style.top = headerHeight + 32 + "px";
  //       stickyElement.style.left = stickyLeft + "px";
  //     }
  //     else {
  //       stickyElement.style.position = "static";
  //       stickyElement.style.top = "unset";
  //       stickyElement.style.left = "unset";
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div>
      {/* Blog Filter */}
      <div className="max-w-[860px] mx-auto py-12 px-8">
        <BlogFilter />
      </div>

      {/* Breadcrumb */}
      <BlogBreadcrumb />

      {/* Blog Detail */}
      <div className="max-w-screen-2xl mx-auto py-12 px-8 flex lg:gap-24 justify-between">
        {/* content */}
        <BlogContent />

        {/* sticky */}
        <div id="sticky-container" className="max-w-[446px] h-fit space-y-10 lg:block hidden">
          <img src="https://placehold.co/800x400/E87500/E87500" className="w-full h-[426px] object-cover" />

          <Courses />

          <FormConsulting />
        </div>
      </div>

      <div className="bg-[#F0F0F0] space-y-12 py-12 px-8">
        <BlogSuggest />

        <div className="lg:hidden block">
          <FormConsulting />
        </div>
      </div>
    </div>
  )
}