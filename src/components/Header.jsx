import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="flex items-center gap-4 px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-lime-300 via-amber-300 to-sky-300" />
          <h1 className="text-xl font-semibold text-slate-800">Meal Planner</h1>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <div className="relative w-72 hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search recipes"
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300 placeholder:text-slate-400"
            />
          </div>
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop"
            alt="Avatar"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-white"
          />
        </div>
      </div>
    </header>
  );
}
