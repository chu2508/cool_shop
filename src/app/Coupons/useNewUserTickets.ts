import useSwr from "swr";

const fetcher = async () => {
  return {
    isShow: false,
    tickets: [
      {
        id: "2",
        name: "新人优惠券",
        number: 1000,
        type: 1,
        expiration: {
          start: "2021-11-11T00:00:00+08:00",
          end: "2021-11-22T23:59:59+08:00",
        },
      },
    ],
  };
};

export default function useNewUserTickets() {
  const { data, error } = useSwr("/api/tickets/new_user", fetcher);

  return { data, error };
}
