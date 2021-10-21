// Next
import { NextRouter } from 'next/router';
const NAME_MY_API = '/api';
// Личности
const PATH_PERSON = '/person';
const API_PERSON = `${NAME_MY_API}${PATH_PERSON}`;
// Карты
const PATH_MAP = '/maps';
const API_MAP = `${NAME_MY_API}${PATH_MAP}`;

// Роутер
const routes = {
  person: {
    path: PATH_PERSON,
    api: API_PERSON,
  },
  map: {
    path: PATH_MAP,
    api: API_MAP,
  },
};

// Назад
export const goBack = (router: NextRouter) => {
  router.back();
};

export default routes;
