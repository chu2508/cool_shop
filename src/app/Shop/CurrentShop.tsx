import { Text, View } from "@tarojs/components";
import "CurrentShop.scss";
import { ReactNode } from "react";
import { BiAlignRight, BiLocationPlus } from "react-icons/bi";
import useCurrentShop from "./useCurrentShop";

interface CurrentShopProps {
  extra?: ReactNode;
}
const CurrentShop = (props: CurrentShopProps) => {
  const { current, loading } = useCurrentShop();
  const loadingTitle = <View className="c-current_shop__title">加载中</View>;
  const normalTitle = (
    <View className="c-current_shop__title">
      <BiLocationPlus />
      <Text className="c-current_shop__name">{current?.name}</Text>
      <BiAlignRight />
    </View>
  );
  const title = loading ? loadingTitle : normalTitle;
  return (
    <View className="c-current_shop">
      <View className="c-current_shop__top">
        {title}
        <View className="c-current_shop__extra">{props.extra}</View>
      </View>
      <View className="c-current_shop__services">
        {current?.services.map((s, i) => (
          <View key={i} className="c-current_shop__service">
            {s}
          </View>
        ))}
      </View>
    </View>
  );
};

export default CurrentShop;
