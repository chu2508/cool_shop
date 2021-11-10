import { useEffect, useState } from "react";

export default function useCountDown(start: string, end: string) {
  const [count, changeCount] = useState(() => {
    return (new Date(end).valueOf() - new Date(start).valueOf()) / 1000;
  });

  useEffect(() => {
    let timer = setInterval(() => {
      const afterCount = count - 1;
      if (afterCount <= 0) {
        clearInterval(timer);
      }
      changeCount(afterCount);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  return {
    hour: Math.floor(count / 3600),
    minute: Math.floor((count % 3600) / 60),
    second: ((count % 3600) % 60) % 60,
    count,
  };
}
