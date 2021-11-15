import { View } from "@tarojs/components";
import faker from "faker";
import MenuContent from "../../app/Common/SlideMenu/MenuContent";
import SlideMenu from "../../app/Common/SlideMenu/SlideMenu";
import "./index.scss";

const mockData = Array.from({ length: 20 }, (_, i) => ({
  key: i.toString(),
  name: faker.name.firstName()
}));
const Category = () => {
  return (
    <View className="m-category">
      <View className="m-category__menu">
        <SlideMenu dataSource={mockData}></SlideMenu>
      </View>
      <View className="m-category__content">
        <MenuContent >
          <View style="height: 200vh">134</View>
        </MenuContent>
      </View>
    </View>
  );
};

export default Category;
