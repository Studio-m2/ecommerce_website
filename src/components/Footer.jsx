export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-slate-950 px-6 py-16 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <h2 className="text-3xl font-black">
             Sphere<span className="text-orange-500">Shop</span>
            </h2>

            <p className="mt-4 text-slate-400">
              Beautiful products. Better shopping.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">
              <a href="#home"  className="transition hover:text-orange-500">Home</a>
              <a href="#categories"  className="transition hover:text-orange-500">Categories</a>
              <a href="#products"  className="transition hover:text-orange-500">Products</a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">
              Customer Care
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">
              <p>Shipping & Delivery</p>
              <p>Returns & Refunds</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">
              Contact
            </h3>

            <p className="text-slate-400">
              Email: support@SphereShop.com
            </p>

            <p className="mt-2 text-slate-400">
              We are here to help.
            </p>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 SphereShop. All rights reserved.
        </div>

      </div>
    </footer>
  );
}