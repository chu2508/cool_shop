import { View } from "@tarojs/components";
import CountDown from "./CountDown";
import RocketDealItem from "./RocketDealItem";
import useRocketDeal from "./useRocketDeal";

const RocketDealCard = () => {
  const { data } = useRocketDeal();
  return (
    data && (
      <View>
        <View>
          限时秒杀
          <CountDown
            onEnd={() => {}}
            start={data.serviceTime}
            end={data.endTime}
          />
        </View>
        <View>
          {data.items.map((item) => (
            <RocketDealItem onClick={() => {}} key={item.id} {...item} />
          ))}
        </View>
      </View>
    )
  );
};

export default RocketDealCard;
