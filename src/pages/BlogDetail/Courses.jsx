import Title from "@/components/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Courses() {
  return (
    <div className="flex flex-col gap-4">
      <Title text={'Các khóa học'} center={false} />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-b border-dashed border-black">
          <AccordionTrigger>Phân tích dữ liệu</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>Phân tích dữ liệu cơ bản</li>
              <li>Phân tích dữ liệu nâng cao</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b border-dashed border-black">
          <AccordionTrigger>Kĩ sư dữ liệu</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>Kĩ sư dữ liệu cơ bản</li>
              <li>Kĩ sư dữ liệu nâng cao</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-b border-dashed border-black">
          <AccordionTrigger>Khoa học dữ liệu</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>Khoa học dữ liệu cơ bản</li>
              <li>Khoa học dữ liệu nâng cao</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-b border-dashed border-black">
          <AccordionTrigger>Lập trình ứng dụng</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>Lập trình ứng dụng cơ bản</li>
              <li>Lập trình ứng dụng nâng cao</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}