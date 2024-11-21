import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function FormConsulting() {
  return (
    <form action="" className="bg-primary rounded-[20px] p-6 flex flex-col gap-6" style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
      <h2 className="uppercase font-bold text-white text-2xl text-center">Đăng ký tư vấn khóa học</h2>

      <div className="w-full">
        <Label htmlFor="fullname" className="text-white font-light">Họ và tên</Label>
        <Input type="text" id="fullname" className="bg-white h-10 rounded-sm" />
      </div>
      <div className="w-full">
        <Label htmlFor="email" className="text-white font-light">Email</Label>
        <Input type="email" id="email" className="bg-white h-10 rounded-sm" />
      </div>
      <div className="w-full">
        <Label htmlFor="phone" className="text-white font-light">Số điện thoại</Label>
        <Input type="tel" id="phone" className="bg-white h-10 rounded-sm" />
      </div>
      <div className="w-full">
        <Label htmlFor="course" className="text-white font-light">Khóa học mà bạn muốn tư vấn</Label>
        <Select name="course">
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="phantichdulieu">Phân tích dữ liệu</SelectItem>
              <SelectItem value="kisudulieu">Kĩ sư dữ liệu</SelectItem>
              <SelectItem value="khoahocdulieu">Khoa học dữ liệu</SelectItem>
              <SelectItem value="laptrinhungdung">Lập trình ứng dụng</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <button type="submit" className="bg-black text-white w-fit uppercase text-sm font-bold rounded-sm hover:scale-105 py-2 px-6 mx-auto my-6">Đăng ký tư vấn</button>
    </form>
  )
}