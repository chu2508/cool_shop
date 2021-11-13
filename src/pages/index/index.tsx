import SearchButton from "@app/Search/SearchButton";
import TopShop from "@app/Shop/TopShop";
import { View } from "@tarojs/components";

const index = () => {
  return (
    <View>
      <TopShop />
      <SearchButton />
    </View>
  );
};

export default index;
