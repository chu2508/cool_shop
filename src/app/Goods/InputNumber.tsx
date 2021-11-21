import { View, Text } from "@tarojs/components";
import { BiPlus, BiMinus } from "react-icons/bi";

interface InputNumberProps {
  value?: number;
  increment: () => void;
  decrement: () => void;
}
const InputNumber = (props: InputNumberProps) => {
  return (
    <View>
      {props.value !== undefined && <BiMinus onClick={props.decrement} />}
      <Text>{props.value}</Text>
      <BiPlus onClick={props.increment} />
    </View>
  );
};

export default InputNumber;
