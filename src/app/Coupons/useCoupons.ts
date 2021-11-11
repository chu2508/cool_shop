import getServiceToken from "src/tools/getServiceToken";
import useSwr from "swr";

const fetcher = async () => {
  return [
    {
      id: "1",
      name: "金秋抵用券",
      type: "1",
      number: 1000,
      precondition: null,
      maxQuantity: 1,
      totalQuantity: 100,
      receivedQuantity: 80,
    },
    {
      id: "2",
      name: "金秋满减券",
      type: "2",
      number: 1000,
      precondition: 5000,
      maxQuantity: 5,
      totalQuantity: 100,
      receivedQuantity: 80,
    },
  ];
};

/**
 * 用户可以领取的优惠券信息
 * @returns
 */
export default function useCoupons() {
  const { data, error } = useSwr("/api/coupons", fetcher);

  return { coupons: data, error };
}

export const CouponsService = getServiceToken(useCoupons);
