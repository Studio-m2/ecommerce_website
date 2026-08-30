
import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Bubbles from "./components/Bubbles";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Wishlist from "./components/Wishlist";
const allProducts = [
  {
    id: 1,
    name: "PDRN Pink Peptide Serum",
    category: "Beauty",
    price: 29,
    icon: "🧴",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    category: "Gadgets",
    price: 39,
    icon: "🎧",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Portable Blender",
    category: "Kitchen",
    price: 24,
    icon: "🥤",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Elegant Smart Watch",
    category: "Fashion",
    price: 45,
    icon: "⌚",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Anti Acne Face Wash",
    category: "Beauty",
    price: 18,
    icon: "🧼",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Gaming Microphone",
    category: "Gadgets",
    price: 35,
    icon: "🎙️",
    rating: 4.7,
  },
  {
    id: 7,
    name: "3-in-1 Cheese Grater",
    category: "Kitchen",
    price: 22,
    icon: "🧀",
    rating: 4.6,
  },
  {
    id: 8,
    name: "Luxury Bracelet Watch",
    category: "Fashion",
    price: 32,
    icon: "⌚",
    rating: 4.8,
  },
  {
    id: 9,
    name: "Vitamin C Primer Serum",
    category: "Beauty",
    price: 25,
    icon: "💧",
    rating: 4.9,
  },
  {
    id: 10,
    name: "Bluetooth Headphones",
    category: "Gadgets",
    price: 49,
    icon: "🎧",
    rating: 4.8,
  },
  {
    id: 11,
    name: "USB Chargeable Juicer",
    category: "Kitchen",
    price: 28,
    icon: "🍹",
    rating: 4.7,
  },
  {
    id: 12,
    name: "Stylish Handbag",
    category: "Fashion",
    price: 55,
    icon: "👜",
    rating: 4.9,
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  // Filter + Search + Sort
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchTerm.trim()) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (priceFilter === "under25") {
      result = result.filter((product) => product.price < 25);
    }

    if (priceFilter === "25to40") {
      result = result.filter(
        (product) => product.price >= 25 && product.price <= 40
      );
    }

    if (priceFilter === "over40") {
      result = result.filter((product) => product.price > 40);
    }

    if (sortBy === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, searchTerm, priceFilter, sortBy]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });

    setCartOpen(true);
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // Wishlist
  const toggleWishlist = (product) => {
    setWishlist((currentWishlist) => {
      const exists = currentWishlist.some((item) => item.id === product.id);

      if (exists) {
        return currentWishlist.filter((item) => item.id !== product.id);
      }

      return [...currentWishlist, product];
    });
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchTerm("");
    setPriceFilter("all");
    setSortBy("default");
  };

  return (
    <div className="overflow-x-hidden bg-[#faf9f7]">
      <div className="relative overflow-hidden">
       


<Navbar
  cartCount={cartCount}
  onCartClick={() => setCartOpen(true)}
  wishlistCount={wishlist.length}
  onWishlistClick={() => setWishlistOpen(true)}
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>



        <Bubbles />

        <Hero
          onShopNow={() =>
            document
              .getElementById("products")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>

      <Categories
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />

   <Products
  products={filteredProducts}
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  priceFilter={priceFilter}
  setPriceFilter={setPriceFilter}
  sortBy={sortBy}
  setSortBy={setSortBy}
  onAddToCart={addToCart}
  wishlist={wishlist}
  onToggleWishlist={toggleWishlist}
  onClearFilters={clearFilters}
/>

      <Footer />

      {/* CART DRAWER */}




{wishlistOpen && (
  <Wishlist
    wishlist={wishlist}
    onClose={() => setWishlistOpen(false)}
    onRemove={(id) => {
      setWishlist((currentWishlist) =>
        currentWishlist.filter(
          (item) => item.id !== id
        )
      );
    }}
    onAddToCart={addToCart}
  />
)}
















      {cartOpen && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setCartOpen(false)}
          />

          <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b px-6 py-5">
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  Your Cart
                </h2>
                <p className="text-sm text-slate-500">
                  {cartCount} {cartCount === 1 ? "item" : "items"}
                </p>
              </div>

              <button
                onClick={() => setCartOpen(false)}
                className="rounded-full bg-slate-100 px-4 py-2 text-xl transition hover:bg-orange-100"
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <div className="text-7xl">🛒</div>

                <h3 className="mt-5 text-2xl font-black">
                  Your cart is empty
                </h3>

                <p className="mt-2 text-slate-500">
                  Add some beautiful products to your cart.
                </p>

                <button
                  onClick={() => {
                    setCartOpen(false);
                    document
                      .getElementById("products")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-6 rounded-full bg-slate-900 px-7 py-3 font-semibold text-white transition hover:bg-orange-500"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto p-5">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-[#f8f7f4] p-4"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-purple-100 text-4xl">
                          {item.icon}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex justify-between gap-2">
                            <div>
                              <p className="text-xs font-semibold text-orange-500">
                                {item.category}
                              </p>

                              <h3 className="mt-1 font-bold text-slate-900">
                                {item.name}
                              </h3>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-sm font-bold text-red-500 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>

                          <div className="mt-3 flex items-center justify-between">
                            <span className="font-black">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>

                            <div className="flex items-center gap-3 rounded-full bg-white px-2 py-1 shadow-sm">
                              <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 font-bold hover:bg-orange-100"
                              >
                                −
                              </button>

                              <span className="min-w-5 text-center font-bold">
                                {item.quantity}
                              </span>

                              <button
                                onClick={() => increaseQuantity(item.id)}
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white font-bold hover:bg-orange-500"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t bg-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Subtotal</span>
                    <span className="text-2xl font-black">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>

              <button
  onClick={() => {
    setCartOpen(false);
    setCheckoutOpen(true);
  }}
  className="mt-5 w-full rounded-full bg-slate-900 py-4 font-bold text-white transition hover:bg-orange-500"
>
  Proceed to Checkout
</button>




{checkoutOpen && (
  <Checkout
    cart={cart}
    cartTotal={cartTotal}
    onBack={() => {
      setCheckoutOpen(false);
      setCartOpen(true);
    }}
    onOrderComplete={() => {
      setCheckoutOpen(false);
      setCart([]);
    }}
  />
)}

                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
