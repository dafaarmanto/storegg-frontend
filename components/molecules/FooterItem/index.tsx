import React from 'react'

interface FooterItemProps {
  title: string,
  link1?: string,
  link2?: string,
  link3?: string,
  link4?: string,
  link5?: string,
  item1?: string,
  item2?: string,
  item3?: string,
  item4?: string,
  item5?: string,
}

export default function FooterItem(props: Partial<FooterItemProps>) {
  const { title, link1, link2, link3, link4, link5, item1, item2, item3, item4, item5 } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
        <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
        <ul className="list-unstyled">
            <li className="mb-6">
                <a href={link1} className="text-lg color-palette-1 text-decoration-none">{item1}</a>
            </li>
            <li className="mb-6">
                <a href={link2} className="text-lg color-palette-1 text-decoration-none">{item2}</a>
            </li>
            <li className="mb-6">
                <a href={link3} className="text-lg color-palette-1 text-decoration-none">{item3}</a>
            </li>
            <li className="mb-6">
                <a href={link4} className="text-lg color-palette-1 text-decoration-none">{item4}</a>
            </li>
            <li className="mb-6">
                <a href={link5} className="text-lg color-palette-1 text-decoration-none">{item5}</a>
            </li>
        </ul>
    </div>
  )
}
