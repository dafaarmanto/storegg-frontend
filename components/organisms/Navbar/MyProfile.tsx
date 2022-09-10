import Link from "next/link"

interface MyProfileProps {
  avatar: string,
  onLogout: () => void;
}

export default function MyProfile(props: MyProfileProps) {
  const { avatar, onLogout } = props;
  return (
    <>
      <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink"
        data-bs-toggle="dropdown" aria-expanded="false">
        <img src={avatar} className="rounded-circle" width={40} height={40} alt="" />
      </a>

      <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
          <li><Link href="/member"><a className="dropdown-item text-lg color-palette-2">Dashboard</a></Link></li>
          <li><Link href="/"><a className="dropdown-item text-lg color-palette-2">Wallet</a></Link></li>
          <li><Link href="/edit-profile"><a className="dropdown-item text-lg color-palette-2">Account Settings</a></Link></li>
          <li onClick={onLogout}><a className="dropdown-item text-lg color-palette-2">Log Out</a></li>
      </ul>
    </>
  )
}
