import { GeolocationService } from "@app/Geolocation/useGeolocation";
import getDistance from "@src/tools/getDistance";
import getServiceToken from "@src/tools/getServiceToken";
import { useContext, useMemo } from "react";
import useSwr from "swr";

const fetcher = async () => {
  return {
    id: "1",
    name: "光谷壹号店",
    address: "高新区高新路1号",
    location: { lon: 35.120011, lat: 24.11251 },
    services: ["外卖", "预约自提"],
  };
};

export default function useCurrentShop() {
  const { geolocation } = useContext(GeolocationService);
  const { data, error } = useSwr(
    geolocation ? ["/api/shop", geolocation] : null,
    fetcher
  );

  const distance = useMemo(() => {
    if (geolocation && data) {
      const { lon: lon1, lat: lat1 } = data.location;
      const { lon: lon2, lat: lat2 } = geolocation;
      return getDistance(lon1, lat1, lon2, lat2);
    }
    return;
  }, [geolocation, data]);

  return {
    error,
    current: data,
    distance,
    geolocation,
    loading: !data && !error,
  };
}

export const CurrentShopService = getServiceToken(useCurrentShop);
