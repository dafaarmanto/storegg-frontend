import axios from 'axios'
import callAPI from '../config/api'
import { CheckoutTypesProps } from './data-types'

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'

export async function getFeaturedGame () {
  const ENDPOINT = 'players/landingPage'

  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`)
  const axiosRes = res.data

  return axiosRes.data
}

export async function getDetailVoucher (id: string) {
  const ENDPOINT = `players/${id}/detail`

  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`)
  const axiosRes = res.data

  return axiosRes.data
}

export async function getGameCategory() {
  const ENDPOINT = 'players/category'

  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`)
  const axiosRes = res.data

  return axiosRes.data
}


export async function setCheckout(data: CheckoutTypesProps) {
  const url = `${ROOT_API}/${API_VERSION}/players/checkout`

  return callAPI({
    url,
    method: 'POST',
    data,
    token: true
  })
}

export const getMemberOverview = async () => {
  const url = `${ROOT_API}/${API_VERSION}/players/dashboard`

  return callAPI({
    url,
    method: 'GET',
    token: true
  })
}