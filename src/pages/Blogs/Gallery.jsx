import Title from "@/components/Title";

export default function Gallery() {
  return (
    <div className="lg:bg-[#F2F0F0] bg-transparent">
      <div className="flex flex-col gap-14 p-8 max-w-screen-2xl mx-auto py-16">
        {/* Title */}
        <Title text="Thư viện ảnh" />

        <div className="grid gap-7 lg:grid-cols-3 grid-cols-2 grid-rows-[440px,440px]">
          <div className="rounded-[20px] overflow-hidden col-span-2 lg:block hidden">
            <img src="https://placehold.co/800x400/F1692F/F1692F" className="size-full object-cover" />
          </div>
          <div className="rounded-[20px] overflow-hidden col-span-1">
            <img src="https://placehold.co/800x400/D9D9D9/D9D9D9" className="size-full object-cover" />
          </div>
          <div className="rounded-[20px] overflow-hidden col-span-1">
            <img src="https://placehold.co/800x400/D9D9D9/D9D9D9" className="size-full object-cover" />
          </div>
          <div className="rounded-[20px] overflow-hidden col-span-2">
            <img src="https://placehold.co/800x400/F1692F/F1692F" className="size-full object-cover" />
          </div>
        </div>
      </div>
    </div>
   
  )
}