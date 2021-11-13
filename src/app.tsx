import useGeolocation, {
  GeolocationService
} from "@app/Geolocation/useGeolocation";
import useCurrentShop, { CurrentShopService } from "@app/Shop/useCurrentShop";
import React, { FC } from "react";
import "./app.scss";

const ShopServiceWrap = getWrap(CurrentShopService, useCurrentShop);

const App: FC = (props) => {
  return (
    <GeolocationService.Provider value={useGeolocation()}>
      <ShopServiceWrap>{props.children}</ShopServiceWrap>
    </GeolocationService.Provider>
  );
};
export default App;

function getWrap<T>(
  service: React.Context<T>,
  serviceHook: (...arg: any[]) => T
) {
  const Wrapper: FC = (props) => {
    return (
      <service.Provider value={serviceHook()}>
        {props.children}
      </service.Provider>
    );
  };
  return Wrapper;
}
