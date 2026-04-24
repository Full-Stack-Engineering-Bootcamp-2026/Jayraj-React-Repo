import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

type Props = {
  end: number;
  duration?: number;
  prefix?: string;
};

export default function CountUpNumber({
  end,
  duration = 2,
  prefix = "", 
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      const countUp = new CountUp(ref.current, end, {
        duration,
        prefix, 
        separator: ",", 
      });

      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    }
  }, [end, duration, prefix]);

  return <span ref={ref} />;
}