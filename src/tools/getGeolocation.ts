export default function getGeolocation(): Promise<{
  lat: number;
  lon: number;
}> {
  return new Promise((resolve, reject) => {
    if (window && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((res) => {
        return resolve({ lat: res.coords.latitude, lon: res.coords.longitude });
      }, reject);
    } else {
      reject(new Error("当前浏览器不支持获取用户地理位置信息"));
    }
  });
}
