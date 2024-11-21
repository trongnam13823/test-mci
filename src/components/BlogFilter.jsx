import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

export default function BlogFilter() {
  return (
    <div>
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={22} color="#818080" />
        <Input className="w-full h-11 pl-10 placeholder:text-[#7C7C7C] placeholder:italic text-[#7C7C7C] italic rounded-full border border-[#7C7C7C] focus-visible:ring-0" type="text" placeholder="Tìm kiếm bài viết" />
      </div>
      {/* Categories */}
      <div className="flex items-stretch justify-between mt-6 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-bold text-primary text-center">
        <Link className="my-auto" to={'/#!'}> <h3>Chia sẻ <br /> kinh nghiệm</h3></Link>
        <Separator orientation="vertical" className="h-auto bg-[#7E7E7E] lg:mx-4 mx-2" />
        <Link className="my-auto" to={'/#!'}> <h3>Kiến thức <br /> chuyên môn</h3></Link>
        <Separator orientation="vertical" className="h-auto bg-[#7E7E7E] lg:mx-4 mx-2" />
        <Link className="my-auto" to={'/#!'}> <h3>MCI Careers</h3></Link>
        <Separator orientation="vertical" className="h-auto bg-[#7E7E7E] lg:mx-4 mx-2" />
        <Link className="my-auto" to={'/#!'}> <h3>Kinh nghiệm <br /> thực chiến</h3></Link>
        <Separator orientation="vertical" className="h-auto bg-[#7E7E7E] lg:mx-4 mx-2" />
        <Link className="my-auto" to={'/#!'}> <h3>Lịch <br /> khai giảng</h3></Link>
      </div>
    </div>
  )
}