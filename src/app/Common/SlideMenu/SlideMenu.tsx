import { View } from "@tarojs/components";
import classnames from "classnames";
import { useEffect, useState } from "react";

export interface SlideMenuProps {
  dataSource: { key: string; name: string }[];
  onClickItem?: (item: { key: string; name: string }, index: number) => void;
  activeIndex?: number;
}

const SlideMenu = (props: SlideMenuProps) => {
  const { activeIndex, dataSource } = props;
  const [index, setIndex] = useState(activeIndex ?? 0);

  useEffect(() => {
    if (activeIndex !== undefined) {
      setIndex(activeIndex);
    }
  }, [activeIndex]);

  return (
    <View className="m-slide_menu" >
      {dataSource.map((item, idx) => {
        const className = classnames("m-slide_menu__item", {
          "is-active": index === idx,
        });
        const handleClick = () => props.onClickItem?.(item, idx);
        return (
          <View data-testid="item" key={idx} onClick={handleClick} className={className}>
            {item.name}
          </View>
        );
      })}
    </View>
  );
};

export default SlideMenu;
