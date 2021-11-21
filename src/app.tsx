import useGeolocation, {
  GeolocationService
} from "@app/Geolocation/useGeolocation";
import useCurrentShop, { CurrentShopService } from "@app/Shop/useCurrentShop";
import React, { FC } from "react";
import "./app.scss";
import useCart, { CartService } from "./app/Cart/useCart";

const ShopServiceWrap = getWrap(CurrentShopService, useCurrentShop);
const GeoWrap = getWrap(GeolocationService, useGeolocation)
const App: FC = (props) => {
  return (
    <GeoWrap>
      <CartService.Provider value={useCart()}>
        <ShopServiceWrap>{props.children}</ShopServiceWrap>
      </CartService.Provider>
    </GeoWrap>
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
