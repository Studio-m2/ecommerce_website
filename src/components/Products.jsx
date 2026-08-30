import { Heart, ShoppingBag, Star } from "lucide-react";

export default function Products({
    products,
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
  priceFilter,
  setPriceFilter,
  sortBy,
  setSortBy,
  onAddToCart,
  wishlist,
  onToggleWishlist,
  onClearFilters,
}) {
  return (
    <section id="products" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-orange-500">
            Handpicked For You
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">
            Trending Products
          </h2>
        </div>

        {/* FILTERS */}
        <div className="mt-10 rounded-3xl bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-4">

            {/* SEARCH */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
            />

            {/* CATEGORY */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
            >
              <option value="All">All Categories</option>
              <option value="Beauty">Beauty</option>
              <option value="Gadgets">Gadgets</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Fashion">Fashion</option>
            </select>

            {/* PRICE */}
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
            >
              <option value="all">All Prices</option>
              <option value="under25">Under $25</option>
              <option value="25to40">$25 - $40</option>
              <option value="over40">Over $40</option>
            </select>

            {/* SORT */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-500"
            >
              <option value="default">Sort: Default</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* CLEAR */}
          <button
            onClick={onClearFilters}
            className="mt-4 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-500"
          >
            Clear Filters
          </button>
        </div>

        {/* RESULT COUNT */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-slate-500">
            Showing{" "}
            <span className="font-bold text-slate-900">
              {products.length}
            </span>{" "}
            products
          </p>

          {selectedCategory !== "All" && (
            <button
              onClick={() => setSelectedCategory("All")}
              className="font-semibold text-orange-500"
            >
              {selectedCategory} ×
            </button>
          )}
        </div>

        {/* PRODUCTS */}
        {products.length === 0 ? (
          <div className="mt-12 rounded-3xl bg-white py-20 text-center shadow-sm">
            <div className="text-6xl">🔍</div>

            <h3 className="mt-5 text-2xl font-black">
              No products found
            </h3>

            <p className="mt-2 text-slate-500">
              Try changing your search or filters.
            </p>

            <button
              onClick={onClearFilters}
              className="mt-6 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-orange-500"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {products.map((product) => {
              const isWishlisted = wishlist.some(
                (item) => item.id === product.id
              );

              return (
                <div
                  key={product.id}
                  className="group rounded-[28px] bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >

                  {/* IMAGE */}
                  <div className="relative flex h-60 items-center justify-center rounded-[22px] bg-gradient-to-br from-orange-100 to-purple-100">

                    {/* WISHLIST */}
                  <button
  onClick={() => onToggleWishlist(product)}
  className={`absolute right-4 top-4 rounded-full p-3 shadow transition ${
    wishlist.some((item) => item.id === product.id)
      ? "bg-red-500 text-white"
      : "bg-white text-slate-900"
  }`}
>
  <Heart
    size={18}
    className={
      wishlist.some((item) => item.id === product.id)
        ? "fill-white"
        : ""
    }
  />
</button>

                    <div className="text-8xl transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {product.icon}
                    </div>
                  </div>

                  {/* DETAILS */}
                  <div className="p-3">

                    <p className="text-sm text-orange-500">
                      {product.category}
                    </p>

                    <h3 className="mt-2 min-h-[48px] font-bold text-slate-900">
                      {product.name}
                    </h3>

                    {/* RATING */}
                    <div className="mt-3 flex items-center gap-1">
                      <Star
                        size={15}
                        className="fill-yellow-400 text-yellow-400"
                      />

                      <span className="text-sm text-slate-500">
                        {product.rating}
                      </span>
                    </div>

                    {/* PRICE + CART */}
                    <div className="mt-5 flex items-center justify-between">

                      <span className="text-lg font-black">
                        ${product.price.toFixed(2)}
                      </span>

                      {/* ADD TO CART */}
                      <button
                        onClick={() => onAddToCart(product)}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white transition hover:scale-110 hover:bg-orange-500 active:scale-95"
                        title="Add to cart"
                      >
                        <ShoppingBag size={18} />
                      </button>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}