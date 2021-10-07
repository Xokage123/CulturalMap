// Axios
import axios from 'axios';
// Router
import routes from 'routes';

export const getMapInfo = async (name: string) => {
  const personInfo = await axios({
    method: 'get',
    url: `${routes.map.api}/${name}`,
    baseURL: String(process.env.NEXT_PUBLIC_PATH),
  });
  console.log(personInfo);
  return personInfo.data;
};
