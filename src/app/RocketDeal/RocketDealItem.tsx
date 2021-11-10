import { Text, View, Image } from "@tarojs/components";

export interface RocketDealItemProps {
  cover: string;
  name: string;
  stock: number;
  staticPrice: number;
  salePrice: number;
  salesQuantity: number;
  onClick: () => void;
}
const RocketDealItem = (props: RocketDealItemProps) => {
  const discount = props.staticPrice - props.salePrice;
  return (
    <View onClick={props.onClick}>
      <View>省{discount}元</View>
      <Image src={props.cover} />
      <View>
        <Text>月售{props.staticPrice}</Text>
        <Text>仅剩{props.stock}份</Text>
      </View>
      <View>{props.name}</View>
    </View>
  );
};

export default RocketDealItem;
