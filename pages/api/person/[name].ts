// Type
import type { NextApiRequest, NextApiResponse } from 'next';
import { IPersonInformation } from 'interfaces/interface/person';
// Data
import { arrayPersons } from 'data/persons';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPersonInformation>
) {
  const person = arrayPersons.find(
    (element) => element.initial === req.query.name
  );
  console.log(req.query);
  if (person) {
    res.status(200).json(person);
  } else {
    new Error('данный элемент не был найден');
  }
}
