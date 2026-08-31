
import { useState } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  Search,
  Heart,
} from "lucide-react";

export default function Navbar({
  cartCount,
  onCartClick,
  wishlistCount,
  onWishlistClick,
  searchTerm,
  setSearchTerm,
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-5 py-6">

      {/* LOGO */}
      <a
        href="#home"
        className="text-2xl font-black tracking-wider"
      >
        Sphere<span className="text-orange-500">Shop</span>
      </a>

      {/* DESKTOP LINKS */}
      <div className="hidden items-center gap-8 md:flex">
        <a
          href="#home"
          className="transition hover:text-orange-500"
        >
          Home
        </a>

        <a
          href="#categories"
          className="transition hover:text-orange-500"
        >
          Categories
        </a>

        <a
          href="#products"
          className="transition hover:text-orange-500"
        >
          Products
        </a>

        <a
          href="#footer"
          className="transition hover:text-orange-500"
        >
          About
        </a>
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-2">

        {/* SEARCH */}
        <div className="hidden items-center rounded-full bg-white shadow md:flex">
          <Search
            size={18}
            className="ml-4 text-slate-500"
          />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="w-28 bg-transparent px-3 py-3 text-sm outline-none"
          />
        </div>

        {/* MOBILE SEARCH */}
        <button
          className="rounded-full bg-white p-3 shadow md:hidden"
          onClick={() =>
            document
              .getElementById("products")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <Search size={19} />
        </button>

        {/* WISHLIST */}
        <button
          onClick={onWishlistClick}
          className="relative rounded-full bg-white p-3 shadow transition hover:bg-red-50"
          title="Wishlist"
        >
          <Heart
            size={19}
            className={
              wishlistCount > 0
                ? "fill-red-500 text-red-500"
                : "text-slate-900"
            }
          />

          {wishlistCount > 0 && (
            <span className="absolute -right-1 -top-1 h-5 min-w-5 rounded-full bg-red-500 px-1 text-center text-xs leading-5 text-white">
              {wishlistCount}
            </span>
          )}
        </button>

        {/* CART */}
        <button
          onClick={onCartClick}
          className="relative rounded-full bg-slate-900 p-3 text-white transition hover:bg-orange-500"
          title="Cart"
        >
          <ShoppingBag size={19} />

          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 h-5 min-w-5 rounded-full bg-orange-500 px-1 text-center text-xs leading-5">
              {cartCount}
            </span>
          )}
        </button>

        {/* MOBILE MENU */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full bg-white p-3 shadow md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute left-5 right-5 top-20 rounded-3xl bg-white p-6 shadow-xl md:hidden">
          <div className="flex flex-col gap-5 font-medium">

            <a
              href="#home"
              onClick={() => setOpen(false)}
            >
              Home
            </a>

            <a
              href="#categories"
              onClick={() => setOpen(false)}
            >
              Categories
            </a>

            <a
              href="#products"
              onClick={() => setOpen(false)}
            >
              Products
            </a>

            <a
              href="#footer"
              onClick={() => setOpen(false)}
            >
              About
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

