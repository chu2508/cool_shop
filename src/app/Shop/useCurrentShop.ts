import { useContext, useMemo } from "react";
import getDistance from "src/tools/getDistance";
import useSwr from "swr";
import { GeolocationService } from "../Geolocation/useGeolocation";

const fetcher = async () => {
  return {
    id: "1",
    name: "光谷壹号店",
    location: { lon: 35.120011, lat: 24.11251 },
    service: ["外卖", "预约自提"],
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
