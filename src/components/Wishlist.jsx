
import {
  X,
  Heart,
  ShoppingBag,
  Trash2,
} from "lucide-react";

export default function Wishlist({
  wishlist,
  onClose,
  onRemove,
  onAddToCart,
}) {
  return (
    <div className="fixed inset-0 z-[120]">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* DRAWER */}
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">

        {/* HEADER */}
        <div className="flex items-center justify-between border-b px-6 py-5">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50">
              <Heart
                size={20}
                className="fill-red-500 text-red-500"
              />
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900">
                My Wishlist
              </h2>

              <p className="text-sm text-slate-500">
                {wishlist.length}{" "}
                {wishlist.length === 1
                  ? "saved item"
                  : "saved items"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-slate-100 p-3 text-slate-700 transition hover:bg-red-100 hover:text-red-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* EMPTY */}
        {wishlist.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-50">
              <Heart
                size={45}
                className="text-red-300"
              />
            </div>

            <h3 className="mt-6 text-2xl font-black">
              Your Wishlist is Empty
            </h3>

            <p className="mt-2 text-slate-500">
              Save your favorite products here and come
              back to them anytime.
            </p>

            <button
              onClick={() => {
                onClose();

                setTimeout(() => {
                  document
                    .getElementById("products")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }, 100);
              }}
              className="mt-6 rounded-full bg-slate-900 px-7 py-3 font-semibold text-white transition hover:bg-orange-500"
            >
              Explore Products
            </button>
          </div>
        ) : (

          /* ITEMS */
          <div className="flex-1 space-y-4 overflow-y-auto p-5">

            {wishlist.map((product) => (
              <div
                key={product.id}
                className="rounded-3xl bg-[#f8f7f4] p-4"
              >

                <div className="flex gap-4">

                  {/* PRODUCT ICON */}
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-purple-100 text-5xl">
                    {product.icon}
                  </div>

                  {/* DETAILS */}
                  <div className="min-w-0 flex-1">

                    <div className="flex justify-between gap-2">

                      <div>
                        <p className="text-xs font-bold text-orange-500">
                          {product.category}
                        </p>

                        <h3 className="mt-1 font-bold text-slate-900">
                          {product.name}
                        </h3>
                      </div>

                      {/* REMOVE */}
                      <button
                        onClick={() =>
                          onRemove(product.id)
                        }
                        className="shrink-0 rounded-full p-2 text-red-500 transition hover:bg-red-100"
                        title="Remove"
                      >
                        <Trash2 size={17} />
                      </button>

                    </div>

                    <div className="mt-4 flex items-center justify-between">

                      <span className="text-lg font-black">
                        ${product.price.toFixed(2)}
                      </span>

                      {/* ADD TO CART */}
                      <button
                        onClick={() => {
                          onAddToCart(product);
                        }}
                        className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-500"
                      >
                        <ShoppingBag size={16} />
                        Add to Cart
                      </button>

                    </div>

                  </div>
                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}
