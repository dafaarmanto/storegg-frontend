import Image from "next/image";
import CheckoutItem from "../components/molecules/CheckoutItem";
import CheckoutConfirmation from "../components/organisms/CheckoutConfirmation";
import CheckoutDetails from "../components/organisms/CheckoutDetails";
import { CheckoutProps, GetServerSideProps } from "../services/data-types";

export default function Checkout(props: CheckoutProps) {
	const { user } = props;

  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
			<div className="container-fluid">
				<div className="logo text-md-center text-start pb-50">
					<a className="" href="#">
							<Image src="/icon/logo.svg" height={60} width={60} alt="Logo" />
					</a>
				</div>
				<div className="title-text pt-md-50 pt-0">
					<h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
					<p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
				</div>
				<CheckoutItem />
				<hr />
				<CheckoutDetails />
				<CheckoutConfirmation />
			</div>
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