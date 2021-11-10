import { View } from "@tarojs/components";
import { Card } from "../Common";
import CountDown from "./CountDown";
import RocketDealItem from "./RocketDealItem";
import useRocketDeal from "./useRocketDeal";

const RocketDealCard = () => {
  const { data } = useRocketDeal();
  return (
    data && (
      <Card
        title={
          <View>
            限时秒杀
            <CountDown
              onEnd={() => {}}
              start={data.serviceTime}
              end={data.endTime}
            />
          </View>
        }
      >
        {data.items.map((item) => (
          <RocketDealItem onClick={() => {}} key={item.id} {...item} />
        ))}
      </Card>
    )
  );
};

export default RocketDealCard;
