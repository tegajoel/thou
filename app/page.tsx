import ProductGrid from "./components/product-grid"
import Sidebar from "./components/sidebar"
// import Button from './components/ui/button'
// import Button from "./components/ui/button"/

export default function SearchResults() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <button className="lg:hidden">
          Filters
        </button>
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

