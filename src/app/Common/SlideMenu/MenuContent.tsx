import { ScrollView } from "@tarojs/components";
import { FC, ReactNode } from "react";
import useScrollDirection from "./useScrollDirection";

interface MenuContentProps {
  renderHeader?: (direction: "down" | "top") => ReactNode;
}
const MenuContent: FC<MenuContentProps> = props => {
  const { direction, changeDirection } = useScrollDirection();
  return (
    <ScrollView
      style={{ height: "100%" }}
      scrollY
      onScroll={e => changeDirection(e.detail.scrollTop)}
    >
      {props.renderHeader?.(direction)}
      {props.children}
    </ScrollView>
  );
};

export default MenuContent;
