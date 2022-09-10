import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

export default function Footer() {
  return (
    <section className="footer pt-50">
          <footer>
              <div className="container-fluid">
                  <div className="row">
                      <LeftSection />
                      <RightSection />
                  </div>
              </div>
          </footer>
      </section>
  )
}
