import axios from 'axios';

// Получаем картографичсекую информацию о объекта
export const getInfoPlace = async (name: string) => {
  const information = await axios({
    method: 'get',
    baseURL: String(process.env.NEXT_PUBLIC_YANDEX_GEOCODER_PUBLIC_PATH),
    url: `?geocode=${name}&apikey=${process.env.NEXT_PUBLIC_YANDEX_KEY}&format=json`,
  });
  console.log(
    information.data.response.GeoObjectCollection.featureMember[0].GeoObject
  );
  return information.data.response.GeoObjectCollection.featureMember[0]
    .GeoObject;
};
