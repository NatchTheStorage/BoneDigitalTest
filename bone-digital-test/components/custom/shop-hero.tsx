'use client'
import { TimePeriod, TimePeriodType } from "../time/time";
import root from 'react-shadow';
// The hero takes in the time period and returns the appropriate title and message

type HeroText = {
  title: string;
  message: string;
}
const heroMessage = (period: TimePeriod): HeroText => {
  switch (period) {
    case TimePeriod.morning:
      return { title: "Our Morning Collection", message: "Good morning! Start your day with our morning essentials." };
    case TimePeriod.afternoon:
      return { title: "Our Afternoon Collection", message: "Afternoon vibes! Refresh yourself with our afternoon treats." };
    case TimePeriod.evening:
      return { title: "Our Evening Collection", message: "Evening time! Wind down with our evening collection." };
    case TimePeriod.night:
      return { title: "Our Night Collection", message: "Night time!  Relax and enjoy our night-time goodies." };
    default:
      return { title: "Welcome to The Shop™", message: "Welcome to The Shop™" };
  }
};

export const heroBackground = (period: TimePeriod): string => {
  switch (period) {
    case TimePeriod.morning:
      return "linear-gradient(270deg, #b5ce51ff, #FFF1B5)";
    case TimePeriod.afternoon:
      return "linear-gradient(270deg, #d7ab55ff, #FFD580)";
    case TimePeriod.evening:
      return "linear-gradient(270deg, #ac8573ff, #c87a15ff)";
    case TimePeriod.night:
      return "linear-gradient(270deg, #857070ff, #342525ff)";
    default:
      return "linear-gradient(270deg, #878686ff, #242121ff)";
  }
}

// rough implementation of shadow DOM to encapsulate styles done here
export default function ShopHero(period: TimePeriodType) {
  return (
    <root.div>
      <div style={{
        background: heroBackground(period),
        height: '40vh', minHeight: 96,
        width: '100%', display: 'flex',
        alignItems: 'center', justifyContent: 'left', backgroundSize: '400% 400%',
      }}>

        <div style={{ marginLeft: '64px', color: 'white' }}>
          <h2 style={{ fontSize: '40px', margin: 0 }}>{heroMessage(period).title}</h2>
          <p style={{ fontSize: '16px' }}>{heroMessage(period).message}</p></div>
      </div>
    </root.div >

  );
};
