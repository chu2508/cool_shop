import useSwr from "swr";
import getServiceToken from "src/tools/getServiceToken";

export async function fetcher() {
  return {
    serviceTime: "2021-11-09T11:00:00+08:00",
    startTime: "2021-11-09T11:00:00+08:00",
    endTime: "2021-11-11T11:00:00+08:00",
    items: [
      {
        id: "1",
        stock: 10,
        staticPrice: 1600,
        salePrice: 1000,
        salesQuantity: 10,
        name: "小龙虾",
        cover: 'a.jpg'
      },
      {
        id: "2",
        stock: 10,
        staticPrice: 1400,
        salePrice: 900,
        salesQuantity: 10,
        name: "小龙虾",
        cover: 'a.jpg'
      },
      {
        id: "3",
        stock: 10,
        staticPrice: 2200,
        salePrice: 1500,
        salesQuantity: 10,
        name: "小龙虾",
        cover: 'a.jpg'
      },
    ],
  };
}

export default function useRocketDeal() {
  const { data, error } = useSwr("/api/rocket_deal", fetcher);
  return {  data, error };
}

export const RocketDealService = getServiceToken(useRocketDeal);
