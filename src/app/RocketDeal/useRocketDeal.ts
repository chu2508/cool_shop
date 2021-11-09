import useSwr from "swr";
import getServiceToken from "src/tools/getServiceToken";

export async function fetcher() {
  return {
    serviceTime: "2021-11-09T11:00:00+08:00",
    items: [
      {
        startTime: "2021-11-09T11:00:00+08:00",
        endTime: "2021-11-11T11:00:00+08:00",
        productId: "1",
      },
    ],
  };
}

export default function useRocketDeal() {
  const { data, error } = useSwr("/api/rocket_deal", fetcher);
  return { items: data, error };
}

export const RocketDealService = getServiceToken(useRocketDeal);
