import Title from "@/components/Title";
import { Link } from "react-router-dom";

export default function Programs() {
  return (
    <div className="max-w-screen-2xl mx-auto py-16 px-8">
      <Title text="Chương trình đào tạo của MCI" />

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-14 mt-20">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-11">
            <img src="https://placehold.co/800x400/F1692F/F1692F" className="rounded-full object-cover w-full aspect-square" />
            <div className="flex flex-col gap-2">
              <h3 className="text-primary font-bold text-2xl text-center">Phân tích dữ liệu</h3>
              <p className="text-black line-clamp-[8]">Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. </p>
              <Link className="text-primary italic hover:underline ml-auto">Xem Thêm</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}