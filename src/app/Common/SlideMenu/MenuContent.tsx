import { ScrollView } from "@tarojs/components";
import { ReactNode } from "react";
import useScrollDirection from "./useScrollDirection";

interface MenuContentProps {
  renderHeader: (direction: "down" | "top") => ReactNode;
}
const MenuContent = (props: MenuContentProps) => {
  const { direction, changeDirection } = useScrollDirection();
  return (
    <ScrollView
      style={{ height: "100%" }}
      scrollY
      onScroll={(e) => changeDirection(e.detail.scrollTop)}
    >
      {props.renderHeader(direction)}
    </ScrollView>
  );
};

export default MenuContent;
