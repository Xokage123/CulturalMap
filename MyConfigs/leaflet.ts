// Data
import { ZOOM } from 'data/map/index';
// Начальные параметры для карты
export const startConfigForMap: L.MapOptions = {
  zoom: ZOOM,
  // Отмена изменения масштаба
  zoomControl: false,
};
// Стартовая концигурация для иконок
export const startConfigIcon: L.IconOptions = {
  iconUrl: 'https://img.icons8.com/ultraviolet/40/000000/read.png',
  iconSize: [40, 40],
  iconAnchor: [20, 0],
  popupAnchor: [0, 0],
};
