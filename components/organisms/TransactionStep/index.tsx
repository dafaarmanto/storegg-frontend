import React from 'react'
import StepItem from '../../molecules/StepItem'

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
        <div className="container-fluid">
            <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">It’s Really That<br /> Easy to Win the Game
            </h2>
            <div className="row gap-lg-0 gap-4" data-aos="fade-up">
              <StepItem 
                SvgImg="item-svg1" 
                Title='1. Start' 
                Desc1='Pilih salah satu game' 
                Desc2='yang ingin kamu top up.' 
              />
              <StepItem 
                SvgImg="item-svg2" 
                Title='2. Fill Up' 
                Desc1='Top up sesuai dengan' 
                Desc2='nominal yang tersedia.' 
              />
              <StepItem 
                SvgImg="item-svg3" 
                Title='3. Be a Winner' 
                Desc1='Siap digunakan untuk' 
                Desc2='improve permainan kamu.' 
              />
            </div>
        </div>
      </section>
  )
}
