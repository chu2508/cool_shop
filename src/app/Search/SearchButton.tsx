import { View } from "@tarojs/components";
import { BiSearch } from "react-icons/bi";
import "./SearchButton.scss";

const SearchButton = () => {
  return (
    <View className="m-search_btn">
      <BiSearch className="m-search_btn__icon" />
    </View>
  );
};

export default SearchButton;
