// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  let ip = '127.0.0.1'
  if (req.socket.remoteAddress) {
    const data = req.socket.remoteAddress.match(/\d+\.\d+\.\d+\.\d+/)
    if (data) {
      ip = data[0]
    }
  }
  const forwarded = req.headers['x-forwarded-for']
  if (forwarded) {
    ip = typeof forwarded === 'string' ? forwarded : forwarded.join()
  }
  res.status(200).send(ip)
}
