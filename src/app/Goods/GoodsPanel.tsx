import { Image, View } from "@tarojs/components";
import { useContext } from "react";
import IGoods from "src/typings/IGoods";
import { CartService } from "../Cart/useCart";
import InputNumber from "./InputNumber";
import PriceDisplay from "./PriceDisplay";
import "./GoodsPanel.scss";

interface GoodsPanelProps {
  goods: IGoods;
}
const GoodsPanel = (props: GoodsPanelProps) => {
  const { goods } = props;
  const { add, getItem, subtract } = useContext(CartService);
  const item = getItem(goods.id);

  return (
    <View className="m-goods_panel">
      <Image className="m-goods_panel__cover" src={goods.coverPath} />
      <View className="m-goods_panel__content">
        <View className="m-goods_panel__title">
          <View className="m-goods_panel__name">{goods.name}</View>
        </View>
        <View className="m-goods_panel__describe">{goods.describe}</View>
        <View className="m-goods_panel__money">
          <PriceDisplay
            stickPrice={goods.stickPrice}
            salePrice={goods.salePrice}
          />
        </View>
        <View className="m-goods_panel__action">
          <InputNumber
            value={item?.quantity}
            increment={() => add(goods.id)}
            decrement={() => subtract(goods.id)}
          />
        </View>
      </View>
    </View>
  );
};

export default GoodsPanel;
