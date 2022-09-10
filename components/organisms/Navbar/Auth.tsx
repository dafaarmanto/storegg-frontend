import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import MyProfile from "./MyProfile";
import jwtDecode from 'jwt-decode';
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types";
import { useRouter } from "next/router";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
    email: "",
    id: "",
    name: "",
    username: ""
  })
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('tkn');

    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_API_IMG;

      user.avatar = `${IMG}/${userFromPayload.avatar}`;

      setIsLogin(true);
      setUser(user);
    }
  }, [])

  const onLogout = () => {
    Cookies.remove('tkn');
    router.push('/');
    setIsLogin(false);
  }

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <MyProfile avatar={user.avatar} onLogout={onLogout} />
        </div>
      </li>
    )
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
            role="button">Sign
            In</a>
      </Link>
    </li>
  )
}
