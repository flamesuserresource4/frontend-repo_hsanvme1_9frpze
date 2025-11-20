import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import HeroSpline from './components/HeroSpline'
import DailyMealCard from './components/DailyMealCard'
import RecipeSearchCard from './components/RecipeSearchCard'

export default function App() {
  const [meals, setMeals] = useState({ breakfast: null, lunch: null, dinner: null, snacks: null })
  const [activeTarget, setActiveTarget] = useState(null)
  const [pulseLabel, setPulseLabel] = useState(null)

  // Refs for target slots
  const slotRefs = {
    Breakfast: useRef(null),
    Lunch: useRef(null),
    Dinner: useRef(null),
    Snacks: useRef(null),
  }

  const [flight, setFlight] = useState(null) // { src, start, end, label, recipe }

  const handleAddMealSlot = (label) => setActiveTarget(label)

  const placeIntoSlot = (label, recipe) => {
    const key = label.toLowerCase()
    setMeals((prev) => ({ ...prev, [key]: recipe }))
    setPulseLabel(label)
    setTimeout(() => setPulseLabel(null), 500)
  }

  const handleSelectRecipe = (recipe, imgEl) => {
    // Decide which slot to target
    const label = activeTarget || ["Breakfast", "Lunch", "Dinner", "Snacks"].find((l) => !meals[l.toLowerCase()]) || 'Breakfast'

    const startRect = imgEl.getBoundingClientRect()
    const targetEl = slotRefs[label].current
    if (!targetEl) {
      placeIntoSlot(label, recipe)
      return
    }
    const targetRect = targetEl.getBoundingClientRect()

    const start = {
      x: startRect.left + startRect.width / 2,
      y: startRect.top + startRect.height / 2,
      w: startRect.width,
      h: startRect.height,
    }
    const endThumbSize = 56
    const end = {
      x: targetRect.left + 24 + endThumbSize / 2,
      y: targetRect.top + 24 + endThumbSize / 2,
      w: endThumbSize,
      h: endThumbSize,
    }

    setFlight({ src: recipe.thumbnail, start, end, label, recipe })
    setActiveTarget(null)
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* global corner pastel glows */}
      <div className="pointer-events-none fixed -z-10 -top-20 -left-20 h-64 w-64 rounded-full bg-lime-200/40 blur-3xl" />
      <div className="pointer-events-none fixed -z-10 -bottom-24 -right-24 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl" />

      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-2 xl:col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-10 xl:col-span-11 flex flex-col">
          <Header />

          <main className="px-4 sm:px-6 lg:px-8 py-6 space-y-6">
            <HeroSpline />

            <div className="grid grid-cols-12 gap-6">
              <DailyMealCard
                meals={meals}
                onAddMeal={(label) => handleAddMealSlot(label)}
                dayLabel="Today"
                slotRefs={slotRefs}
                pulseLabel={pulseLabel}
              />

              <RecipeSearchCard onSelect={handleSelectRecipe} />
            </div>
          </main>
        </div>
      </div>

      <AnimatePresence>
        {flight && (
          <FlightImage
            key="flight"
            src={flight.src}
            start={flight.start}
            end={flight.end}
            onComplete={() => {
              placeIntoSlot(flight.label, flight.recipe)
              setFlight(null)
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

function FlightImage({ src, start, end, onComplete }) {
  const mid = {
    x: (start.x + end.x) / 2,
    y: Math.min(start.y, end.y) - Math.max(80, Math.abs(end.x - start.x) * 0.2),
    w: (start.w + end.w) / 2,
    h: (start.h + end.h) / 2,
  }

  return (
    <motion.div className="pointer-events-none fixed inset-0 z-50">
      {/* trail */}
      <motion.img
        src={src}
        alt="trail"
        className="absolute rounded-lg object-cover blur-[3px] opacity-50"
        style={{ width: start.w, height: start.h, left: start.x - start.w / 2, top: start.y - start.h / 2 }}
        animate={{
          left: [start.x - start.w / 2, mid.x - mid.w / 2, end.x - end.w / 2],
          top: [start.y - start.h / 2, mid.y - mid.h / 2, end.y - end.h / 2],
          width: [start.w, mid.w * 0.9, end.w * 0.9],
          height: [start.h, mid.h * 0.9, end.h * 0.9],
          opacity: [0.45, 0.25, 0],
        }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
      />

      {/* main */}
      <motion.img
        src={src}
        alt="flying"
        className="absolute rounded-xl object-cover shadow-xl ring-2 ring-white/50"
        style={{ width: start.w, height: start.h, left: start.x - start.w / 2, top: start.y - start.h / 2 }}
        animate={{
          left: [start.x - start.w / 2, mid.x - mid.w / 2, end.x - end.w / 2],
          top: [start.y - start.h / 2, mid.y - mid.h / 2, end.y - end.h / 2],
          width: [start.w, mid.w * 0.85, end.w * 1.05, end.w],
          height: [start.h, mid.h * 0.85, end.h * 1.05, end.h],
          boxShadow: [
            '0 8px 24px rgba(16,185,129,0.20)',
            '0 10px 28px rgba(147,51,234,0.20)',
            '0 12px 32px rgba(14,165,233,0.22)'
          ],
        }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
        onAnimationComplete={onComplete}
      />
    </motion.div>
  )
}
