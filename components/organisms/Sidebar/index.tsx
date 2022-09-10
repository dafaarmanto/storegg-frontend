import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import SidebarMenuItem from "../../molecules/SidebarMenuItem"
import Footer from "./Footer"
import Profile from "./Profile"

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings'
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  const router = useRouter()

  const onLogout = () => {
    Cookies.remove('tkn')
    router.push('/sign-in');
    toast.success('Logout Berhasil! Silahkan login kembali.')
  }

  return (
    <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
            <Profile />
            <div className="menus">
                <SidebarMenuItem active={activeMenu === 'overview'} Icon="/icon/Overview.svg" Alt="Overview" MenuTitle="Overview" link="/member" />
                <SidebarMenuItem active={activeMenu === 'transactions'} Icon="/icon/Transactions.svg" Alt="Transactions" MenuTitle="Transactions" link="/member/transactions" />
                <SidebarMenuItem Icon="/icon/Messages.svg" Alt="Messages" MenuTitle="Messages" link="#" />
                <SidebarMenuItem Icon="/icon/CardIcon.svg" Alt="CardIcon" MenuTitle="Card" link="#" />
                <SidebarMenuItem Icon="/icon/Rewards.svg" Alt="Rewards" MenuTitle="Rewards" link="#" />
                <SidebarMenuItem active={activeMenu === 'settings'} Icon="/icon/Settings.svg" Alt="Settings" MenuTitle="Settings" link="/member/edit-profile" />
                <SidebarMenuItem Icon="/icon/LogOutIcon.svg" Alt="LogOutIcon" MenuTitle="Log Out" onClick={onLogout} />
            </div>
            <Footer />
        </div>
    </section>
  )
}
