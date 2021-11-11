import useSwr from "swr";

const fetcher = () => {
  return [
    {
      id: "1",
      couponId: "1",
      status: 1,
      nmae: "金秋抵用券",
      type: "1",
      number: 1000,
    },
  ];
};

/**
 * 用户已经领到的优惠券
 */
export function useUserTickets(status: number) {
  const { data, error } = useSwr(["/api/tickets", status], fetcher);

  return { tickets: data, error };
}
