
export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-slate-950 px-6 py-16 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-5">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black">
              Sphere<span className="text-orange-500">Shop</span>
            </h2>

            <p className="mt-4 text-slate-400">
              Beautiful products. Better shopping.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">
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
            </div>
          </div>

          {/* Customer Care */}
          
<div>
  <h3 className="mb-4 text-lg font-bold">
    Customer Care
  </h3>

  <div className="flex flex-col gap-3 text-slate-400">
    <a
      href="#shipping"
      className="transition hover:text-orange-500"
    >
      Shipping & Delivery
    </a>

    <a
      href="#returns"
      className="transition hover:text-orange-500"
    >
      Returns & Refunds
    </a>

    <a
      href="#privacy"
      className="transition hover:text-orange-500"
    >
      Privacy Policy
    </a>
  </div>
</div>



          {/* Contact */}
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

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-3">

              {/* Facebook */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v2.2H8.1v3h2.6v8h2.8Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M15.5 3c.4 2.1 1.6 3.4 3.5 3.5v3.1c-1.7.1-3.1-.4-4.4-1.3v6.2c0 3.4-2.3 5.5-5.4 5.5-3 0-5.2-2.1-5.2-5s2.2-5 5.3-5c.4 0 .8 0 1.2.1v3.1c-.4-.1-.8-.2-1.2-.2-1.2 0-2.2.8-2.2 2s.9 2 2.1 2c1.3 0 2.2-.8 2.2-2.4V3h4.1Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.2 3.7-6.2 3.7Z" />
                </svg>
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © 2026 SphereShop. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

