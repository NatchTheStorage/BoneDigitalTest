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
    const newPeriod = periods[Math.floor(Math.random() * periods.filter((c) => c !== period).length)];

    setPeriod(newPeriod);
  }

  return (
    <div style={{ backgroundColor: heroBackground(period), transition: 'background 3s ease-in-out' }} className="home-bg-gradient h-screen w-full">
      <div className="flex flex-col items-center justify-center h-full text-white space-y-6">
        <h1 onClick={randomiseTimePeriod} className="text-7xl">The Shop™</h1>

        <p>by Natch Surana</p>
        <Link href={'/shop'}><Button className="text-xl cursor-pointer">Begin your journey</Button></Link>
      </div>

    </div>

  );
}
