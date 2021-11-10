/**
 * 计算两个经纬度坐标点的直线距离
 * @param lon1 经度1
 * @param lat1 纬度1
 * @param lon2 经度2
 * @param lat2 纬度2
 * @returns 距离 单位m
 */
export default function getDistance(
  lon1: number,
  lat1: number,
  lon2: number,
  lat2: number
) {
  const radLat1 = (lat1 * Math.PI) / 180.0;
  const radLat2 = (lat2 * Math.PI) / 180.0;
  const a = radLat1 - radLat2;
  const b = (lon1 * Math.PI) / 180.0 - (lon2 * Math.PI) / 180.0;
  let s =
    2 *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(a / 2), 2) +
          Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)
      )
    );
  s = s * 6378.137;
  s = Math.round(s * 10000) / 10;
  return s;
}
