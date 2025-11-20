import { Plus, Pencil, Trash2 } from "lucide-react";

const MealSlot = ({ label, item, onAdd, slotRef, pulse }) => {
  return (
    <div className="p-3">
      <div className="text-xs font-medium text-slate-500 mb-2">{label}</div>
      <div
        ref={slotRef}
        className={
          "group relative flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3 transition-colors " +
          (pulse ? "ring-2 ring-lime-300 bg-lime-50" : "")
        }
      >
        {item ? (
          <div className="flex items-center gap-3 w-full">
            <img src={item.thumbnail} alt={item.name} className="w-14 h-14 rounded-lg object-cover" />
            <div className="flex-1">
              <div className="text-sm font-semibold text-slate-800">{item.name}</div>
              <div className="text-xs text-slate-500">{item.calories} kcal</div>
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 rounded-lg hover:bg-white border border-slate-200" aria-label="Edit"><Pencil className="w-4 h-4" /></button>
              <button className="p-2 rounded-lg hover:bg-white border border-slate-200" aria-label="Delete"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        ) : (
          <button
            onClick={onAdd}
            className="w-full flex items-center justify-center gap-2 text-slate-500 hover:text-slate-700 py-6 rounded-xl bg-white shadow-sm border border-slate-200"
          >
            <Plus className="w-5 h-5" />
            <span className="text-sm font-medium">Add Meal</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default function DailyMealCard({ dayLabel = "Today", meals, onAddMeal, slotRefs = {}, pulseLabel }) {
  const labels = ["Breakfast", "Lunch", "Dinner", "Snacks"];
  return (
    <section className="col-span-12 lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {["Mon", "Tue", "Wed", dayLabel, "Fri", "Sat", "Sun"].map((d, i) => (
            <div
              key={i}
              className={
                "px-3 py-1.5 text-xs rounded-lg border " +
                (d === dayLabel
                  ? "bg-gradient-to-br from-lime-200 via-amber-200 to-sky-200 text-slate-800 border-transparent"
                  : "bg-slate-50 text-slate-600 border-slate-200")
              }
            >
              {d}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {labels.map((label) => (
          <MealSlot
            key={label}
            label={label}
            item={meals[label.toLowerCase()]}
            onAdd={() => onAddMeal(label)}
            slotRef={slotRefs[label]}
            pulse={pulseLabel === label}
          />
        ))}
      </div>
    </section>
  );
}
