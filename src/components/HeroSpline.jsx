import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 w-full overflow-hidden rounded-2xl">
      <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent" />
    </div>
  );
}
