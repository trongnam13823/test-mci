import { Link } from "react-router-dom";

export default function BlogItem({ vetical, img = "https://placehold.co/800x400/D9D9D9/D9D9D9", rounded=true }) {
  return (
    <div className={`flex-1 flex gap-6 ${vetical ? "flex-col" : "lg:flex-row flex-col"}`}>
      <div className={`${!vetical && "lg:w-[45%]"} w-full`}>
        <img src={img} alt="blog" className={`block w-full h-full object-cover ${rounded ? "rounded-[20px]" : ""}`} />
      </div>
      <div className={`${!vetical && "lg:w-[55%]"} flex flex-col gap-2`}>
        <h3 className="text-primary font-bold">Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó như nào</h3>
        <p className="text-black line-clamp-4">Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...</p>
        <Link to={'/blog-detail'} className="text-primary italic hover:underline ml-auto">Xem Thêm</Link>
      </div>
    </div>
  )
}