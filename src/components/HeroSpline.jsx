import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 w-full overflow-hidden rounded-2xl">
      <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      {/* soft pastel veil */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
      {/* subtle corner glows */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-lime-200/50 blur-2xl" />
      <div className="pointer-events-none absolute -right-10 -bottom-10 h-24 w-24 rounded-full bg-rose-200/50 blur-2xl" />
    </div>
  );
}
