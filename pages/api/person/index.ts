// Type
import type { NextApiRequest, NextApiResponse } from 'next';
import { IPersonInformation } from 'interfaces/interface/person';
// Data
import { arrayPersons } from 'data/persons';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<IPersonInformation>>
) {
  console.log(req.query);
  res.status(200).json(arrayPersons);
}
