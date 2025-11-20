import { Plus } from "lucide-react";

export default function RecipeSearchCard({ onSelect }) {
  const items = [
    {
      id: "1",
      name: "Chicken Salad",
      calories: 420,
      thumbnail:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "2",
      name: "Avocado Toast",
      calories: 280,
      thumbnail:
        "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "3",
      name: "Berry Smoothie",
      calories: 190,
      thumbnail:
        "https://images.unsplash.com/photo-1542444459-db63c5b8c1b4?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "4",
      name: "Grilled Salmon",
      calories: 510,
      thumbnail:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "5",
      name: "Quinoa Bowl",
      calories: 390,
      thumbnail:
        "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=400&auto=format&fit=crop",
    },
  ]

  return (
    <section className="col-span-12 lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 md:p-6">
      <div className="mb-4">
        <input
          placeholder="Search recipes"
          className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-300"
        />
      </div>
      <div className="max-h-[420px] overflow-auto pr-1 space-y-3">
        {items.map((r) => (
          <div key={r.id} className="flex items-center justify-between gap-3 p-2 rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3">
              <img src={r.thumbnail} alt={r.name} className="w-14 h-14 rounded-lg object-cover recipe-thumb" />
              <div>
                <div className="text-sm font-semibold text-slate-800">{r.name}</div>
                <div className="text-xs text-slate-500">{r.calories} kcal</div>
              </div>
            </div>
            <button
              onClick={(e) => {
                const card = e.currentTarget.closest('div')
                const img = card.querySelector('img.recipe-thumb')
                if (img) onSelect(r, img)
              }}
              className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-slate-800 bg-gradient-to-br from-lime-200 via-amber-200 to-sky-200 hover:brightness-105 border border-transparent"
            >
              <Plus className="w-4 h-4" /> Add
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
