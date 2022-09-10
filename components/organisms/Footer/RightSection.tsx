import React from 'react'
import FooterItem from '../../molecules/FooterItem'

export default function RightSection() {
  return (
    <div className="col-lg-8 mt-lg-0 mt-20">
        <div className="row gap-sm-0">
            <FooterItem
               title='Company' 
               item1='About Us' 
               item2='Press Release' 
               item3='Terms of Use' 
               item4='Privacy & Policy' 
            />
            <FooterItem 
              title='Support' 
              item1='Refund Policy' 
              item2='Unlock Rewards' 
              item3='Live Chatting' 
            />
            <FooterItem 
              title='Connect' 
              link1='mailto: hi@store.gg' 
              link2='mailto: team@store.gg' 
              link3='http://maps.google.com/?q=Pasific12,JakartaSelatan' 
              link4='tel: 02111229090' 
              item1='hi@store.gg' 
              item2='team@store.gg' 
              item3='Pasific
                            12,
                            Jakarta Selatan' 
              item4='021 - 1122 - 9090' 
            />
        </div>
    </div>
  )
}
