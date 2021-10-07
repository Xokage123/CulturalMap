// Type
import type { NextApiRequest, NextApiResponse } from 'next';
import { IPersonInformation } from 'interfaces/interface/person';
// Data
import { arrayPersons } from 'data/persons';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPersonInformation>
) {
  const personInfo = arrayPersons.find(
    (element) => element.initial === req.query.name
  );
  if (personInfo) {
    res.status(200).json(personInfo);
  } else {
    new Error('данный элемент не был найден');
  }
}
