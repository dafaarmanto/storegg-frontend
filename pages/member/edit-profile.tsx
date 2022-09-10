import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import Sidebar from "../../components/organisms/Sidebar";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";
import jwtDecode from "jwt-decode";
import { updateProfile } from "../../services/member";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface UserStateType {
	id: string,
	name: string,
	email: string,
	avatar: any
}

export default function EditProfile() {
	const [user, setUser] = useState<UserStateType>({
		id: '',
		name: '',
		email: '',
		avatar: ''
	});
	const [imagePreview, setImagePreview] = useState('/');
	const router = useRouter()

	useEffect(() => {
		const token = Cookies.get('tkn');
		if (token) {
			const jwtToken = atob(token)
			const payload: JWTPayloadTypes = jwtDecode(jwtToken)
			const userFromPayload: UserTypes = payload.player
			setUser(userFromPayload)
		}
	}, [])

	const onSubmit = async () => {
		const data = new FormData();

		data.append('image', user.avatar)
		data.append('name', user.name)

		const response = await updateProfile(data, user.id)
		if (response.error) {
			toast.error(response.message)
		} else {
			Cookies.remove('tkn')
			router.push('/sign-in')
		}
	}

	const IMG = process.env.NEXT_PUBLIC_API_IMG

  return (
      <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="settings" />
      <main className="main-wrapper">
          <div className="ps-lg-0">
              <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
              <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                  <form action="">
                      <div className="photo d-flex">
                          <div className="image-upload">
                              <label htmlFor="avatar">
																{imagePreview === '/' ? (
																	<img src={`${IMG}/${user.avatar}`} height={90} width={90} alt="" style={{ borderRadius: 100, objectFit: 'cover' }} />
																	) : (
                                  <img src={imagePreview} height={90} width={90} alt="" style={{ borderRadius: 100, objectFit: 'cover' }} />
																)}
                              </label>
                              <input 
																id="avatar" 
																type="file" 
																name="avatar" 
																accept="image/png, image/jpeg"
																onChange={(e) => {
																	const img = e.target.files![0];
																	setImagePreview(URL.createObjectURL(img))
																	return setUser({
																		...user,
																		avatar: img
																	})
																}} 
															/>
                          </div>
                      </div>
                      <div className="pt-30">
                          <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">Full
                              Name</label>
                          <input 
														type="text" 
														className="form-control rounded-pill text-lg" 
														id="name" 
														name="name"
                            aria-describedby="name" 
														value={user.name} 
														placeholder="Enter your name" 
														onChange={(e) => setUser({
															...user,
															name: e.target.value
														})} />
                      </div>
                      <div className="pt-30">
                          <label htmlFor="email" className="form-label text-lg fw-medium color-palette-1 mb-10">Email
                              Address</label>
                          <input type="email" disabled className="form-control rounded-pill text-lg" id="email" name="email"
                              aria-describedby="email" value={user.email} placeholder="Enter your email address" />
                      </div>
                      {/* <div className="pt-30">
                          <label htmlFor="phone" className="form-label text-lg fw-medium color-palette-1 mb-10">Phone</label>
                          <input type="tel" className="form-control rounded-pill text-lg" id="phone" name="phone"
                              aria-describedby="phone" placeholder="Enter your phone number" />
                      </div> */}
                      <div className="button-group d-flex flex-column pt-50">
                          <button type="button" className="btn btn-save fw-medium text-lg text-white rounded-pill"
                              onClick={onSubmit}>Save My Profile</button>
                      </div>
                  </form>
                </div>
            </div>
      </main>
    </section>
  );
}
