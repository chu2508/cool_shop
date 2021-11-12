import { View, Image, Text } from "@tarojs/components";
import IGoods from "src/typings/IGoods";

interface GoodsCardProps {
  goods: IGoods;
}
const GoodsCard = (props: GoodsCardProps) => {
  const { goods } = props;
  return (
    <View className="m-goods_card">
      <Image className="m-goods_card__cover" src={goods.coverPath} />
      <View className="m-goods_card__content">
        <View className="m-goods_card__title">{goods.name}</View>
        <View className="m-goods_card__subtile">
          月销{goods.salesQuantity} 仅剩{goods.stock}份
        </View>
        <View className="m-goods_card__money">
          <Text className="m-goods_card__price">
            <Text className="m-goods_card__unit"></Text>
          </Text>
          <View className="m-goods_card__price m-goods_card__price--discount"></View>
        </View>
      </View>
    </View>
  );
};

export default GoodsCard;
