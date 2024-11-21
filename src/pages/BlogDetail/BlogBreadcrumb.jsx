import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight } from "lucide-react";

export default function BlogBreadcrumb() {
  return (
    <div className="bg-[#F0F0F0]">
      <div className="max-w-screen-2xl mx-auto py-4 px-8">
        <Breadcrumb>
          <BreadcrumbList>

            <BreadcrumbItem className='text-primary font-bold hover:opacity-80'>
              <BreadcrumbLink className='hover:text-primary' href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator>
              <ChevronRight className="text-primary font-bold !size-4" />
            </BreadcrumbSeparator>

            <BreadcrumbItem className='text-primary font-bold hover:opacity-80'>
              <BreadcrumbLink className='hover:text-primary' href="/#!">Blog</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator>
              <ChevronRight className="text-primary font-bold !size-4" />
            </BreadcrumbSeparator>

            <BreadcrumbItem className='text-primary font-bold hover:opacity-80'>
              <BreadcrumbLink className='hover:text-primary' href="/#!">Chia sẻ kinh nghiệm</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator>
              <ChevronRight className="text-primary font-bold !size-4" />
            </BreadcrumbSeparator>

            <BreadcrumbItem className='text-primary font-bold hover:opacity-80'>
              <BreadcrumbLink className='hover:text-primary' href="/#!">Bạn Nguyễn Quang Hưng - Học Data là 1 quá trình và mình đã vượt qua nó như nào</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
}