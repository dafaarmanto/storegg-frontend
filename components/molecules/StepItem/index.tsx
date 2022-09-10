import React from 'react'

interface StepItemProps {
  SvgImg: 'item-svg1' | 'item-svg2' | 'item-svg3',
  Title: string,
  Desc1: string,
  Desc2: string
}

export default function StepItem( props: StepItemProps ) {
  const { SvgImg, Title, Desc1, Desc2 } = props;
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
          <img src={`/icon/${SvgImg}.svg`} height={80} width={80} className="mb-30" />
          <p className="fw-semibold text-2xl mb-2 color-palette-1">{Title}</p>
          <p className="text-lg color-palette-1 mb-0">{Desc1}<br />
              {Desc2}</p>
      </div>
  </div>
  )
}
