import { View, Text } from "@tarojs/components";
import useCountDown from "./useCountDown";

interface CountDownProps {
  start: string;
  end: string;
}
const CountDown = (props: CountDownProps) => {
  const { hour, minute, second } = useCountDown(props.start, props.end);
  const pad = (num: number) => num.toString().padStart(2, "0");
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
