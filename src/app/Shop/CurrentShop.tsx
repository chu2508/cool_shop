import { View, Text } from "@tarojs/components";
import { BiLocationPlus, BiAlignRight } from "react-icons/bi";
import "CurrentShop.scss";
import useCurrentShop from "./useCurrentShop";

const CurrentShop = () => {
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
        <View className="c-current_shop__extra"></View>
      </View>
      <View className="c-current_shop__services">
        <View className="c-current_shop__service"></View>
      </View>
    </View>
  );
};

export default CurrentShop;
