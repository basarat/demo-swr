// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type User = {
  alias: string,
  avatar: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const alias = 'McLovin';
  res.status(200).json({
    alias: alias,
    avatar: `https://avatars.dicebear.com/api/big-ears/${alias}.svg`,
  });
}
