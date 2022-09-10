import cx from 'classnames';
import Link from 'next/link';

interface SidebarMenuItemProps {
  Icon: string,
  Alt: string,
  active?: boolean,
  MenuTitle: string,
  link?: string,
  onClick: () => void
}

export default function SidebarMenuItem(props: Partial<SidebarMenuItemProps>) {
  const { Icon, Alt, active, MenuTitle, link, onClick } = props;
  const classList = cx({
    'item': true,
    'mb-30': true,
    'active': active
  })

  return (
    <div className={classList} onClick={onClick}>
        <img src={Icon} className="icon me-3" height={25} width={25} alt={Alt} />
        <p className="item-title m-0">
          {onClick ? (
            <a className="text-lg text-decoration-none" style={{ cursor: 'pointer' }} >{MenuTitle}</a>
          ) : (
            <Link href={`${link}`}>
              <a className="text-lg text-decoration-none">{MenuTitle}</a>
            </Link>
          )}
        </p>
    </div>
  )
}
