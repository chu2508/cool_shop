import { useMemo, useRef, useState } from "react";

export default function useScrollDirection() {
  const ref = useRef<number | null>(null);
  const [top, setTop] = useState(0);

  const changeDirection = (val: number) => {
    ref.current = top;
    setTop(val);
  };

  const direction: "top" | "down" = useMemo(() => {
    if (ref.current === null) return "down";
    return top > ref.current ? "down" : "top";
  }, [top]);

  return { direction, changeDirection };
}
