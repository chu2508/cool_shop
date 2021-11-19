import { View, Text } from "@tarojs/components";
import { BiPlus, BiCut } from "react-icons/bi";

interface InputNumberProps {
  value?: number;
  increment: () => void;
  decrement: () => void;
}
const InputNumber = (props: InputNumberProps) => {
  return (
    <View>
      {props.value !== undefined && <BiPlus onClick={props.increment} />}
      <Text>{props.value}</Text>
      <BiCut onClick={props.decrement} />
    </View>
  );
};

export default InputNumber;
