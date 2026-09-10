import { useState } from "react";
import ProductCard from "./productCard";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  emoji: string;
};

const products: Product[] = [
  { id: 1, name: "کتونی اسپرت", price: 850000, category: "پوشاک", emoji: "👟" },
  { id: 2, name: "هدفون بی‌سیم", price: 1200000, category: "الکترونیک", emoji: "🎧" },
  { id: 3, name: "کوله پشتی", price: 620000, category: "پوشاک", emoji: "🎒" },
  { id: 4, name: "ساعت هوشمند", price: 2500000, category: "الکترونیک", emoji: "⌚" },
  { id: 5, name: "قهوه‌ساز", price: 950000, category: "لوازم خانه", emoji: "☕" },
  { id: 6, name: "عینک آفتابی", price: 450000, category: "پوشاک", emoji: "🕶️" },
  { id: 7, name: "اسپیکر بلوتوثی", price: 780000, category: "الکترونیک", emoji: "🔊" },
  { id: 8, name: "چراغ رومیزی", price: 320000, category: "لوازم خانه", emoji: "💡" },
];

const categories: string[] = ["همه", "پوشاک", "الکترونیک", "لوازم خانه"];

function App() {
  const [search, setSearch] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("همه");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.includes(search);
    const matchesCategory =
      activeCategory === "همه" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        جستجوی محصولات
      </h1>

      <div className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          placeholder="اسم محصول رو جستجو کن"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-xl shadow-md border-none outline-none text-right"
        />

        <div className="flex gap-2 justify-center mt-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${activeCategory === cat
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-400 mt-8">محصولی پیدا نشد</p>
      )}
    </div>
  );
}

export default App;