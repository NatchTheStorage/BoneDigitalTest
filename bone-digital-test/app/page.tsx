'use client'

import { heroBackground } from "@/components/custom/shop-hero";
import { CurrentTimePeriod, TimePeriod, TimePeriodType } from "@/components/time/time";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [period, setPeriod] = useState<TimePeriodType>(CurrentTimePeriod());

  const randomiseTimePeriod = () => {
    const periods = Object.values(TimePeriod);
    const filteredPeriods = periods.filter((c) => c !== period);
    const newPeriod = filteredPeriods[Math.floor(Math.random() * filteredPeriods.length)];

    console.log('Randomised time period to', newPeriod);
    setPeriod(newPeriod);
  }

  return (
    <div style={{ background: heroBackground(period) }} className="home-bg-gradient h-screen w-full transition-all transition-normal">
      <div className="flex flex-col items-center justify-center h-full text-white space-y-6">
        <h1 className="text-7xl">The Shop™</h1>

        <p>by Natch Surana</p>
        <Link href={'/shop'}><Button className="text-xl cursor-pointer">Begin your journey</Button></Link>
        <Button className="opacity-20 rounded-full" onClick={randomiseTimePeriod}>!</Button>
      </div>

    </div>

  );
}
