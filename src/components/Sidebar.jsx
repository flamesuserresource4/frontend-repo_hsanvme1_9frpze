import { Home, Calendar, BookOpen, ShoppingCart, Settings } from "lucide-react";

const NavItem = ({ icon: Icon, active }) => {
  return (
    <button
      className={
        "group relative flex items-center justify-center w-12 h-12 rounded-xl transition-colors " +
        (active
          ? "bg-gradient-to-br from-lime-300 via-amber-300 to-sky-300 text-slate-900 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          : "text-slate-400 hover:text-slate-700 hover:bg-slate-100")
      }
      aria-label="Navigation Item"
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col gap-3 p-4 border-r border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col gap-2">
        <NavItem icon={Home} active />
        <NavItem icon={Calendar} />
        <NavItem icon={BookOpen} />
        <NavItem icon={ShoppingCart} />
        <NavItem icon={Settings} />
      </div>
    </aside>
  );
}
