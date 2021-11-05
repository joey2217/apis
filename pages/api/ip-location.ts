// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

interface Parameters {
  fields?: string
  lang?: string
  callback?: string
}

interface ResponseData {
  query: string
  status: string
  country: string
  countryCode: string
  region: string
  regionName: string
  city: string
  zip: string
  lat: number
  lon: number
  timezone: string
  isp: string
  org: string
  as: string
}

interface ResponseError {
  message: string
  error: unknown
}

const BASE_URL = 'http://ip-api.com/json/'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | ResponseError>
) {
  let { ip, ...param } = req.query
  axios({
    url: BASE_URL + ip,
    method: 'GET',
    params: {
      ...param,
      lang: 'zh-CN',
    },
  })
    .then((response) => {
      res.status(200).json(response.data as ResponseData)
    })
    .catch((err) => {
      res.status(500).json({
        message: '获取数据失败!',
        error: err,
      })
    })
}
