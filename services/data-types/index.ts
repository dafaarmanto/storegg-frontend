import { AxiosRequestConfig } from "axios"

export interface CategoryTypes {
  _id: string,
  name: string,
  __v: number
}

export interface GameItemTypes {
  _id: string,
  status: string,
  name: string,
  thumbnail: string,
  category: CategoryTypes
}

export interface NominalTypes {
  _id: string,
  coinQuantity: number,
  coinName: string,
  price: number
}

export interface BankTypes {
  _id: string,
  name: string,
  bankName: string,
  noRekening: string
}

export interface PaymentTypes {
  _id: string,
  type: string,
  status: string,
  banks: BankTypes[]
}

export interface TopUpFormProps {
  nominals: NominalTypes[],
  payments: PaymentTypes[]
}

export interface NominalFormItemProps {
  nominalID: string,
  coinQuantity: number,
  coinName: string,
  price: number,
  onChange: () => void
}

export interface PaymentFormItemProps {
  bankID: string,
  type: string,
  name: string,
  onChange: () => void
}

export interface LoginTypes {
  email: string,
  password: string
}

export interface UserTypes {
  id: string,
  username: string,
  email: string,
  name: string,
  avatar: string
}

export interface JWTPayloadTypes {
  player: UserTypes,
  iat: number
}

export interface CheckoutProps {
	user: UserTypes
}

export interface CheckoutTypesProps {
  voucher: string,
  nominal: string,
  payment: string,
  bank: string,
  name: string,
  accountUser: string
}

export interface CallApiProps extends AxiosRequestConfig {
  token?: boolean,
  serverToken?: string
}

export interface GetServerSideProps {
  req: {
    cookies: {
      tkn: string
    }
  },
  params: {
    idTrx: string
  }
}

export interface ContentCardProps {
  icon: string,
  name: string,
  title: string,
  balance: number
}

export interface HistoryVoucherTopupTypes {
  category: string,
  coinName: string,
  coinQuantity: string,
  gameName: string,
  price: number,
  thumbnail: string
}

export interface HistoryPaymentTypes {
  bankName: string,
  name: string,
  noRekening: string,
  type: string
}

export interface HistoryTransactionTypes {
  _id: string,
  historyVoucherTopup: HistoryVoucherTopupTypes,
  value: number,
  status: string,
  accountUser: string,
  name: string,
  tax: number,
  historyPayment: HistoryPaymentTypes 
}

export interface TopupCategoryTypes {
  _id: string,
  value: number,
  name: string
}

export interface TransactionContentTypes {
  _id: string,
  historyVoucherTopup: HistoryVoucherTopupTypes,
  value: number,
  status: string
}

export interface TransactionDetailsProps {
  transactionDetail: HistoryTransactionTypes
}

export interface TransactionDetailsContentProps {
  data: HistoryTransactionTypes
}