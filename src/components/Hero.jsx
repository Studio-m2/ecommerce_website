
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero({ onShopNow }) {
  const handleExplore = () => {
    document
      .getElementById("categories")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[700px] px-5 pb-20 pt-10 lg:min-h-[680px]"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-200/50 blur-[120px]" />

      <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-purple-200/50 blur-[100px]" />

      <div className="relative z-30 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-orange-500 shadow">
            <Sparkles size={16} />
            DISCOVER SOMETHING EXTRAORDINARY
          </div>

          <h2 className="text-5xl font-black leading-tight text-slate-900 sm:text-7xl">
            Shop <span className="text-orange-500">Better.</span>
            <br />
            Live <span className="text-purple-600">Beautifully.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Discover elegant products, trending gadgets and everyday essentials
            carefully selected to make your shopping experience beautiful.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* SHOP NOW */}
            <button
              onClick={onShopNow}
              className="flex items-center gap-2 rounded-full bg-slate-900 px-7 py-4 font-semibold text-white transition hover:bg-orange-500"
            >
              Shop Now
              <ArrowRight size={18} />
            </button>

            {/* EXPLORE */}
            <button
              onClick={handleExplore}
              className="rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold transition hover:border-orange-400 hover:text-orange-500"
            >
              Explore More
            </button>
          </div>

          <div className="mt-10 flex gap-10">
            <div>
              <h3 className="text-2xl font-black">10K+</h3>
              <p className="text-sm text-slate-500">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-2xl font-black">500+</h3>
              <p className="text-sm text-slate-500">Products</p>
            </div>

            <div>
              <h3 className="text-2xl font-black">4.9★</h3>
              <p className="text-sm text-slate-500">Average Rating</p>
            </div>
          </div>
        </motion.div>

        {/* 3D HERO CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative z-30 mx-auto flex h-[430px] w-full max-w-md items-center justify-center [perspective:1000px]"
        >
          <motion.div
            whileHover={{
              rotateY: 12,
              rotateX: -8,
              scale: 1.05,
            }}
            className="flex h-[360px] w-[280px] flex-col justify-between rounded-[40px] bg-gradient-to-br from-orange-300 via-orange-200 to-purple-300 p-5 shadow-2xl [transform-style:preserve-3d]"
          >
            <div className="rounded-[30px] bg-slate-900 p-6 text-white">
              <p className="text-sm tracking-[0.3em] text-white/60">
                SphereShop
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                Premium Picks
              </h3>

              <div className="my-8 flex h-36 items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-purple-500 text-6xl shadow-xl"
                >
                  ✨
                </motion.div>
              </div>

              <p className="text-sm text-white/60">
                TRENDING NOW
              </p>

              <p className="font-bold">
                Curated For You
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

