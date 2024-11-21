import Title from "./Title";

export default function Footer() {
  return (
    <footer className="bg-[#212121]">      
      <div className="max-w-screen-2xl mx-auto py-16 px-8 flex lg:flex-nowrap flex-wrap justify-between gap-8">
        <div className="flex flex-col gap-4 w-[340px] lg:order-first order-last">
          <Title text={'FANPAGE'} center={false} width="80px" color="#fff" />
          <img src="/fanpage.png" className=""/>
        </div>

        <div className="flex flex-col gap-4 w-[340px]">
          <Title text={'HÀ NỘI'} center={false} width="80px" color="#fff"/>

          <div className="text-white">
            <b>165 Thái Hà</b>
            <p className="space-x-1">
              <b>Hotline:</b>
              <span className="font-light">024 7106 8368</span>
            </p>
            <p className="space-x-1">
              <b>Địa chỉ:</b>
              <span className="font-light">Tầng 6, Số 5, Ngách 23, Ngõ 165 Thái Hà, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà Nội, Việt Nam</span>
            </p>
          </div>

          <div className="text-white">
            <b>30 Trung Liệt</b>
            <p className="space-x-1">
              <b>Hotline:</b>
              <span className="font-light">024 7106 8368</span>
            </p>
            <p className="space-x-1">
              <b>Địa chỉ:</b>
              <span className="font-light">Số 30, Trung Liệt, Phường Trung Liệt, Quận Đống Đa, Thành phố Hà Nội, Việt Nam</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[340px]">
          <Title text={'HỒ CHÍ MINH'} center={false} width="80px" color="#fff" />

          <div className="text-white mt-4">
            <b>13 Cao Thắng</b>
            <p className="space-x-1">
              <b>Hotline:</b>
              <span className="font-light">024 7106 8368</span>
            </p>
            <p className="space-x-1">
              <b>Địa chỉ:</b>
              <span className="font-light">13 Cao Thắng, Phường 2, Quận 3, Thành Phố Hồ Chí Minh</span>
            </p>
          </div>

          <div className="text-white mt-4">
            <b>224 Điện Biên Phủ</b>
            <p className="space-x-1">
              <b>Hotline:</b>
              <span className="font-light">024 7106 8368</span>
            </p>
            <p className="space-x-1">
              <b>Địa chỉ:</b>
              <span className="font-light">Tầng 4 & Tầng 6, 224 Điện Biên Phủ, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh, Việt Nam</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-[340px]">
          <Title text={'HOTLINE'} center={false} width="80px" color="#fff" />

          <div className="text-white mt-4">
            <p className="space-x-1">
            <b>Khiếu nại CEO:</b>
            <span className="font-light">0982 521 378</span>
          </p>
          <p className="space-x-1">
            <b>Khiếu nại DCEO:</b>
            <span className="font-light">0916 442 368</span>
          </p>
          <p className="space-x-1">
            <b>Hợp tác truyền thông:</b>
            <span className="font-light">0934 146 016</span>
          </p>
          <p className="space-x-1">
            <b>Hợp tác kinh doanh:</b>
            <span className="font-light">0961 123 988</span>
          </p>
          <p className="space-x-1">
            <b>Khiếu nại dịch vụ CSKH:</b>
            <span className="font-light">024 7106 8368</span>
          </p>
          <p className="space-x-1">
            <b>Tư vấn khóa học 1 <br /> Ms. Khánh Ly:</b>
            <span className="font-light">0352 433 233</span>
          </p>
          <p className="space-x-1">
            <b>Tư vấn khóa học 2 <br /> Ms. Ngọc Linh:</b>
            <span className="font-light">0344 463 698</span>
          </p>
          <p className="space-x-1">
            <b>CSKH:</b>
            <span className="font-light">cskh@mcivietnam.com</span>
          </p>
          </div>
        </div>
      </div>
    </footer>
  )
}