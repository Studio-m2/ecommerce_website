
import { useState } from "react";
import { ArrowLeft, CheckCircle, ShoppingBag } from "lucide-react";

export default function Checkout({ cart, cartTotal, onBack, onOrderComplete }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    payment: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrderPlaced(true);

    setTimeout(() => {
      onOrderComplete();
    }, 2500);
  };

  if (orderPlaced) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm">
        <div className="w-full max-w-md rounded-[30px] bg-white p-10 text-center shadow-2xl">
          <CheckCircle
            size={70}
            className="mx-auto text-green-500"
          />

          <h2 className="mt-6 text-3xl font-black text-slate-900">
            Order Confirmed!
          </h2>

          <p className="mt-3 text-slate-500">
            Thank you for shopping with SphereShop.
            Your order has been successfully placed.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">
              Order Total
            </p>

            <p className="mt-1 text-2xl font-black">
              ${cartTotal.toFixed(2)}
            </p>
          </div>

          <p className="mt-5 text-sm text-slate-400">
            Redirecting to shopping...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[150] overflow-y-auto bg-[#faf9f7]">

      {/* HEADER */}
      <div className="sticky top-0 z-20 border-b bg-white/95 px-5 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-full bg-slate-100 px-5 py-3 font-semibold transition hover:bg-orange-100"
          >
            <ArrowLeft size={18} />
            Back to Cart
          </button>

          <h1 className="hidden text-2xl font-black sm:block">
           Sphere<span className="text-orange-500">Shop</span>
          </h1>

          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
            <ShoppingBag size={18} />
            Secure Checkout
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1fr_400px]">

        {/* FORM */}
        <div className="rounded-[30px] bg-white p-6 shadow-sm sm:p-8">

          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-orange-500">
              Checkout
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Complete Your Order
            </h2>

            <p className="mt-2 text-slate-500">
              Enter your details to complete your purchase.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* NAME */}
            <div>
              <label className="mb-2 block text-sm font-bold">
                Full Name
              </label>

              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-500"
              />
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Email Address
                </label>

                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Phone Number
                </label>

                <input
                  required
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-500"
                />
              </div>

            </div>

            {/* ADDRESS */}
            <div>
              <label className="mb-2 block text-sm font-bold">
                Delivery Address
              </label>

              <textarea
                required
                name="address"
                value={form.address}
                onChange={handleChange}
                rows="3"
                placeholder="House number, street, area..."
                className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-500"
              />
            </div>

            {/* CITY + POSTAL */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-bold">
                  City
                </label>

                <input
                  required
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Your city"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Postal Code
                </label>

                <input
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  placeholder="Postal code"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-500"
                />
              </div>

            </div>

            {/* PAYMENT */}
            <div>
              <label className="mb-3 block text-sm font-bold">
                Payment Method
              </label>

              <div className="space-y-3">

                <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-orange-400">
                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={form.payment === "Cash on Delivery"}
                    onChange={handleChange}
                  />

                  <div>
                    <p className="font-bold">
                      Cash on Delivery
                    </p>

                    <p className="text-sm text-slate-500">
                      Pay when your order arrives.
                    </p>
                  </div>
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-orange-400">
                  <input
                    type="radio"
                    name="payment"
                    value="Card"
                    checked={form.payment === "Card"}
                    onChange={handleChange}
                  />

                  <div>
                    <p className="font-bold">
                      Credit / Debit Card
                    </p>

                    <p className="text-sm text-slate-500">
                      Card payment integration can be connected.
                    </p>
                  </div>
                </label>

              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-slate-900 py-4 font-bold text-white transition hover:bg-orange-500"
            >
              Place Order — ${cartTotal.toFixed(2)}
            </button>

          </form>
        </div>

        {/* ORDER SUMMARY */}
        <div className="h-fit rounded-[30px] bg-white p-6 shadow-sm lg:sticky lg:top-28">

          <h2 className="text-2xl font-black">
            Order Summary
          </h2>

          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 rounded-2xl bg-[#f8f7f4] p-3"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-purple-100 text-3xl">
                  {item.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-bold">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Qty: {item.quantity}
                  </p>
                </div>

                <span className="font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 border-t pt-5">

            <div className="flex justify-between text-slate-500">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-slate-500">
              <span>Shipping</span>
              <span className="font-semibold text-green-600">
                FREE
              </span>
            </div>

            <div className="flex justify-between border-t pt-4">
              <span className="text-lg font-bold">
                Total
              </span>

              <span className="text-2xl font-black">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

