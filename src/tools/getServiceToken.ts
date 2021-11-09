import React, { createContext } from "react";

/**
 * 泛型获取服务注入token
 * @param _service 服务hooks不会实际调用，只用来获取服务返回值类型
 * @param defaultVal createContext的默认值
 * @returns
 */
export default function getServiceToken<T>(
  _service: (...arg: any[]) => T,
  defaultVal?: T
): React.Context<T> {
  return createContext(defaultVal as T);
}
