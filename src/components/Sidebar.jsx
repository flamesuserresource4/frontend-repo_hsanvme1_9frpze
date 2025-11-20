import { Home, Calendar, BookOpen, ShoppingCart, Settings } from "lucide-react";

const NavItem = ({ icon: Icon, active }) => {
  return (
    <button
      className={
        "group relative flex items-center justify-center w-12 h-12 rounded-xl transition-colors " +
        (active
          ? "bg-gradient-to-br from-lime-300 via-rose-300 to-sky-300 text-slate-900 shadow-[0_10px_35px_rgba(16,185,129,0.15),_0_6px_20px_rgba(14,165,233,0.12)]"
          : "text-slate-400 hover:text-slate-700 hover:bg-gradient-to-br hover:from-slate-50 hover:via-white hover:to-slate-50")
      }
      aria-label="Navigation Item"
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col gap-3 p-4 border-r border-slate-200 bg-white/70 backdrop-blur-sm">
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
