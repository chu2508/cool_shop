import getGeolocation from "@src/tools/getGeolocation";
import getServiceToken from "@src/tools/getServiceToken";
import useSwr from "swr";

export default function useGeolocation() {
  const { data, error } = useSwr("/app/geolocation", getGeolocation);
  return { geolocation: data, error };
}

export const GeolocationService = getServiceToken(useGeolocation);
