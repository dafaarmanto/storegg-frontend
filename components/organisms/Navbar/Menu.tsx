import cx from 'classnames'
import Link from 'next/link';

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

export default function Menu(props: MenuProps) {
  const { title, active, href = '/' } = props;
  const classList = cx({
    'nav-link': true,
    active
  })

  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classList} aria-current="page">{title}</a>
      </Link>
    </li>
  )
}
