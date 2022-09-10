import Sidebar from "../../../components/organisms/Sidebar";
import TransactionContent from "../../../components/organisms/TransactionContent";
import { GetServerSideProps, JWTPayloadTypes, UserTypes } from "../../../services/data-types";

 export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionContent />
    </section>
  )
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { tkn } = req.cookies

	if (!tkn) {
		return {
			redirect: {
				destination: '/sign-in',
				permanent: false
			}
		}
	}

	return {
		props: {}
	}
}