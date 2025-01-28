import React from 'react';
import { useState } from 'react';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className, ...props }: SidebarProps) {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggleAccordion = (value: string) => {
    setOpenSections((prev) => {
      const newSections = new Set(prev);
      if (newSections.has(value)) {
        newSections.delete(value);
      } else {
        newSections.add(value);
      }
      return newSections;
    });
  };

  return (
      <aside className={className} {...props}>
        <h2 className="font-semibold mb-4">Refine results</h2>

        <div className="w-full">
          <div>
            <button
                onClick={() => toggleAccordion('sort')}
                className="w-full text-left p-2 border-b"
            >
              Sort by
            </button>
            {openSections.has('sort') && (
                <div className="space-y-2 p-2">
                  <div className="flex items-center">
                    <label className="text-sm ml-2">Price: low to high</label>
                  </div>
                  <div className="flex items-center">
                    <label className="text-sm ml-2">Price: high to low</label>
                  </div>
                </div>
            )}
          </div>

          <div>
            <button
                onClick={() => toggleAccordion('brand')}
                className="w-full text-left p-2 border-b"
            >
              Brand
            </button>
            {openSections.has('brand') && (
                <div className="space-y-2 p-2">
                  {['adidas', 'Disney', 'Prada', 'Mattel'].map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id={brand}
                            className="peer"
                        />
                        <label
                            htmlFor={brand}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {brand}
                        </label>
                      </div>
                  ))}
                </div>
            )}
          </div>

          <div>
            <button
                onClick={() => toggleAccordion('shops')}
                className="w-full text-left p-2 border-b"
            >
              Shops
            </button>
            {openSections.has('shops') && (
                <div className="space-y-2 p-2">
                  {['eBay', 'StockX', 'CamperNation', 'Amazon.co.uk'].map((shop) => (
                      <div key={shop} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id={shop}
                            className="peer"
                        />
                        <label
                            htmlFor={shop}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {shop}
                        </label>
                      </div>
                  ))}
                </div>
            )}
          </div>

          <div>
            <button
                onClick={() => toggleAccordion('price')}
                className="w-full text-left p-2 border-b"
            >
              Price
            </button>
            {openSections.has('price') && (
                <div className="space-y-2 p-2">
                  <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="under-100"
                        className="peer"
                    />
                    <label
                        htmlFor="under-100"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Under £100
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="100-350"
                        className="peer"
                    />
                    <label
                        htmlFor="100-350"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      £100 - £350
                    </label>
                  </div>
                </div>
            )}
          </div>
        </div>
      </aside>
  );
}