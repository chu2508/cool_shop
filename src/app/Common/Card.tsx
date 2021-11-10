import { View } from "@tarojs/components";
import { FC } from "react";

export interface CardProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
}

const Card: FC<CardProps> = (props) => {
  return (
    <View className="my-card">
      <View className="my-card__head">
        {props.title}
        {props.extra}
      </View>
      <View className="my-card__content">{props.children}</View>
    </View>
  );
};

export default Card;
