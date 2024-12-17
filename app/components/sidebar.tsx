import { Checkbox } from "@/components/ui/checkbox"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <aside className={className} {...props}>
      <h2 className="font-semibold mb-4">Refine results</h2>
      
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="sort">
          <AccordionTrigger>Sort by</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center">
                <label className="text-sm ml-2">Price: low to high</label>
              </div>
              <div className="flex items-center">
                <label className="text-sm ml-2">Price: high to low</label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {['adidas', 'Disney', 'Prada', 'Mattel'].map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={brand} />
                  <label
                    htmlFor={brand}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="shops">
          <AccordionTrigger>Shops</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {['eBay', 'StockX', 'CamperNation', 'Amazon.co.uk'].map((shop) => (
                <div key={shop} className="flex items-center space-x-2">
                  <Checkbox id={shop} />
                  <label
                    htmlFor={shop}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {shop}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="under-100" />
                <label
                  htmlFor="under-100"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Under £100
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="100-350" />
                <label
                  htmlFor="100-350"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  £100 - £350
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  )
}

