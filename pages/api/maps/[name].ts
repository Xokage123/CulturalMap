// Type
import type { NextApiRequest, NextApiResponse } from 'next';
import { ICoordinate } from 'interfaces/interface/map';
// Data
import { arrayAllCoordinatesPerson } from 'data/map';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICoordinate>
) {
  const person = arrayAllCoordinatesPerson.find(
    (element) => element.initial === req.query.name
  );
  if (person) {
    res.status(200).json(person);
  } else {
    new Error('анный элемент не был найден');
  }
}
