import { View, Text } from "@tarojs/components";
import { useEffect } from "react";
import useCountDown from "./useCountDown";

interface CountDownProps {
  start: string;
  end: string;
  onEnd: () => void;
}
const CountDown = (props: CountDownProps) => {
  const { hour, minute, second, count } = useCountDown(props.start, props.end);
  const { onEnd } = props;
  const pad = (num: number) => num.toString().padStart(2, "0");

  useEffect(() => {
    if (count <= 0) {
      onEnd();
    }
  }, [count, onEnd]);
  return (
    <View>
      <Text>{pad(hour)}</Text>
      <Text> : </Text>
      <Text>{pad(minute)}</Text>
      <Text> : </Text>
      <Text>{pad(second)}</Text>
    </View>
  );
};

export default CountDown;
