import { ChevronDown, Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"

export default function Header() {
  return (
    <header id="header" className="sticky top-0 left-0 z-50 flex items-center justify-between h-[94px] w-full bg-primary p-4 pl-0 gap-4">
      <div className="h-full flex">
        {/* Logo */}
        <Link to={'/'}>
          <img className="object-contain h-full" style={{ filter: "brightness(0) invert(1)" }} src="/mci-logo.png" alt="mci-logo" />
        </Link>

        {/* Separator */}
        <Separator orientation="vertical" className="mr-4"/>

        {/* Navbar Desktop */}
        <nav className="items-center gap-4 uppercase font-medium text-white lg:flex hidden">
          <Link to="/" className="flex items-center">Khóa học <ChevronDown /></Link>
          <Link to="/#!" className="flex items-center">Lịch đào tạo <ChevronDown /></Link>
          <Link to="/#!" className="flex items-center">Doanh nghiệp <ChevronDown /></Link>
          <Link to="/#!" className="flex items-center">Blog <ChevronDown /></Link>
          <Link to="/#!" className="flex items-center">Về chúng tôi <ChevronDown /></Link>
        </nav>
        {/* Navbar Mobile */}
        <Menu size={34} className="text-white cursor-pointer lg:hidden my-auto" />
      </div>

      <div className="flex items-center gap-4">
        <Search className="text-white cursor-pointer" size={28}/>
        <Button variant="outline" className="text-primary hover:text-primary text-xl size-fit">Đăng ký</Button>
      </div>
    </header>
  )
}