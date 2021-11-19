import { View } from "@tarojs/components";
import faker from "faker";
import GoodsPanel from "../../app/Goods/GoodsPanel";
import IGoods from "../../typings/IGoods";
import MenuContent from "../../app/Common/SlideMenu/MenuContent";
import SlideMenu from "../../app/Common/SlideMenu/SlideMenu";
import "./index.scss";

const mockData = Array.from({ length: 20 }, (_, i) => ({
  key: i.toString(),
  name: faker.name.firstName()
}));
const mockGoods = Array.from({ length: 10 }, (_, i) => {
  const item: IGoods = {
    id: i.toString(),
    name:  faker.lorem.sentence(10),
    coverPath: faker.random.image(),
    describe:  faker.lorem.sentence(10, 5),
    stock: 10,
    stickPrice: 5000,
    salePrice: 4500,
    salesQuantity: 10
  };
  return item;
});
const Category = () => {
  return (
    <View className="m-category">
      <View className="m-category__menu">
        <SlideMenu dataSource={mockData}></SlideMenu>
      </View>
      <View className="m-category__content">
        <MenuContent>
          {mockGoods.map((goods, idx) => (
            <GoodsPanel key={idx} goods={goods} />
          ))}
        </MenuContent>
      </View>
    </View>
  );
};

export default Category;
