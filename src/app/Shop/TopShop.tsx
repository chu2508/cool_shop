import { View } from "@tarojs/components";
import { useContext } from "react";
import { BiCaretRight, BiLocationPlus } from "react-icons/bi";
import "./TopShop.scss";
import { CurrentShopService } from "./useCurrentShop";

const TopShop = () => {
  const { current } = useContext(CurrentShopService);
  return (
    <View className="m-top_shop">
      <BiLocationPlus className="m-top_shop__icon" />
      <View className="m-top_shop__content">
        <View className="m-top_shop__title">
          {current?.name || "加载中..."}
        </View>
        <View className="m-top_shop__subtitle">{current?.address}</View>
      </View>
      <BiCaretRight className="m-top_shop__extra" />
    </View>
  );
};

export default TopShop;
