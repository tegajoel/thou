// import { Filter } from 'lucide-react'
import ProductGrid from "./product-grid"
import Button from './ui/button'
import React from 'react'
import Sidebar from "./sidebar";

export default function SearchResults() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <Button>
          {/*<Filter className="h-4 w-4 mr-2" />*/}
          Filters
        </Button>
        <div className="flex gap-2">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            Under £100
            <button className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              ✕
            </button>
          </span>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <Sidebar className="hidden lg:block w-64 flex-none" />
        <ProductGrid />
      </div>
    </div>
  )
}

