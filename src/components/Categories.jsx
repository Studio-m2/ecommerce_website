
const categories = [
  { name: "Beauty", icon: "✨", count: "120+ Products" },
  { name: "Gadgets", icon: "🎧", count: "85+ Products" },
  { name: "Kitchen", icon: "🍳", count: "90+ Products" },
  { name: "Fashion", icon: "👜", count: "110+ Products" },
];

export default function Categories({
  selectedCategory,
  onCategorySelect,
}) {
  return (
    <section id="categories" className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-bold uppercase tracking-[0.2em] text-orange-500">
          Explore
        </p>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="mt-3 text-4xl font-black text-slate-900">
              Shop by Category
            </h2>

            <p className="mt-3 max-w-xl text-slate-500">
              Choose a category and discover products curated just for you.
            </p>
          </div>

          <button
            onClick={() => onCategorySelect("All")}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
              selectedCategory === "All"
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-orange-100"
            }`}
          >
            View All
          </button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const active = selectedCategory === category.name;

            return (
              <button
                key={category.name}
                onClick={() => onCategorySelect(category.name)}
                className={`group cursor-pointer rounded-[30px] p-7 text-left transition duration-300 hover:-translate-y-3 hover:shadow-xl ${
                  active
                    ? "bg-orange-50 shadow-lg ring-2 ring-orange-400"
                    : "bg-[#f8f7f4]"
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow">
                  {category.icon}
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  {category.name}
                </h3>

                <p className="mt-2 text-slate-500">
                  {category.count}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span
                    className={`text-sm font-bold ${
                      active ? "text-orange-500" : "text-slate-500"
                    }`}
                  >
                    {active ? "Selected" : "Explore"}
                  </span>

                  <span className="text-xl transition group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

