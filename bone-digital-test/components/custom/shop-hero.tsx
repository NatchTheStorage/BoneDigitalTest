'use client'
import { TimePeriod, TimePeriodType } from "../time/time";
import root from 'react-shadow';
// The hero takes in the time period and returns the appropriate title and message

type HeroText = {
  title: string;
  message: string;
}
function heroMessage(period: TimePeriod): HeroText {
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

export function heroBackground(period: TimePeriod): string {
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
// Ran out of time - would rather put the css elsewhere and inject them in
export default function ShopHero(period: TimePeriodType) {
  const styles = `
    h2 {
      font-size: 40px;
      margin: 0;
    }

    p {
      font-size: 16px;
    }

    .hero-text {
      margin-left: 64px; 
      color: white;
    }

    .hero-container {
      height: 40vh; 
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: left;
      background-size: 400% 400%;
      background: ${heroBackground(period)};
      -webkit-animation: AnimationName 15s ease infinite;
      -moz-animation: AnimationName 15s ease infinite;
      animation: AnimationName 15s ease infinite;
    }
    @-webkit-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
  `;
  return (
    <root.div >
      <div>
        <style type="text/css">{styles}</style>
        <div className="hero-container">

          <div className='hero-text'>
            <h2>{heroMessage(period).title}</h2>
            <p>{heroMessage(period).message}</p></div>
        </div>
      </div>
    </root.div>
  );
};
