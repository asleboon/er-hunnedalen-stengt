// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { YR_BASE_URL } from '../../constants';
import { performRequest } from '../../http'
import { YrResponse } from '../../yr-response'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<YrResponse>
) {
  const response = await performRequest<null,YrResponse>(`${YR_BASE_URL}/routeforecast/mountainpass/11`);
  res.status(200).json(response);
}
