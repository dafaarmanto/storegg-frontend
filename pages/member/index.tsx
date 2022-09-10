import jwtDecode from "jwt-decode";
import OverviewContent from "../../components/organisms/OverviewContent";
import Sidebar from "../../components/organisms/Sidebar";
import { GetServerSideProps, JWTPayloadTypes, UserTypes } from "../../services/data-types";

export default function Member() {
  return (
    <section className="overview overflow-auto">
        <Sidebar activeMenu="overview" />
        <OverviewContent />
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

	const jwtToken = Buffer.from(tkn, 'base64').toString('ascii');
	const payload: JWTPayloadTypes = jwtDecode(jwtToken);
	const userFromPayload: UserTypes = payload.player;
	const IMG = process.env.NEXT_PUBLIC_API_IMG;
	userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`

	return {
		props: {
			user: userFromPayload,
		}
	}
}