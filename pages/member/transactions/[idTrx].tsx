import jwtDecode from "jwt-decode";
import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import { GetServerSideProps, JWTPayloadTypes, TransactionDetailsProps, UserTypes } from "../../../services/data-types";
import { getTransactionDetails } from "../../../services/member";

export default function Detail(props: TransactionDetailsProps) {
  const { transactionDetail } = props;
  
  return (
    <section className="transactions-detail overflow-auto">
        <TransactionDetailContent data={transactionDetail} />
    </section>
  )
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { tkn } = req.cookies
  const { idTrx } = params;

	if (!tkn) {
		return {
			redirect: {
				destination: '/sign-in',
				permanent: false
			}
		}
	}

	const jwtToken = Buffer.from(tkn, 'base64').toString('ascii');
	const payload: JWTPayloadTypes = jwtDecode(jwtToken);
	const userFromPayload: UserTypes = payload.player;
	const IMG = process.env.NEXT_PUBLIC_API_IMG;
	userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`

  const response = await getTransactionDetails(idTrx, jwtToken)

	return {
		props: {
			transactionDetail: response.data,
		}
	}
}