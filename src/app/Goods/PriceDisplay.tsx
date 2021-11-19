import { View, Text } from "@tarojs/components";

interface PriceDisplayProps {
  stickPrice: number;
  salePrice: number;
}
const PriceDisplay = (props: PriceDisplayProps) => {
  return (
    <View>
      <Text>{props.stickPrice}</Text>
      <Text>{props.salePrice}</Text>
    </View>
  );
};

export default PriceDisplay;
