import cx from 'classnames';

interface ButtonTabProps {
  title: string,
  active: boolean,
  onClick: () => void
}

export default function ButtonTab(props: ButtonTabProps) {
  const { title, active, onClick } = props;
  const classList = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active
  });

  return (
    <button onClick={onClick} type="button" className={classList}>{title}</button>
  )
}
