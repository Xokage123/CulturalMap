import axios from 'axios';
// Router
import routes from 'routes';

export const getPerson = async (name: string) => {
  const person = await axios({
    method: 'get',
    url: `${routes.person.api}/${name}`,
    baseURL: String(process.env.NEXT_PUBLIC_PATH),
  });
  console.log(person);
  return person.data;
};
