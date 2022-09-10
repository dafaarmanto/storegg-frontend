import cx from 'classnames';
import { NumericFormat } from 'react-number-format';

interface TableRowProps {
  title: string,
  category: string,
  image: string,
  item: string,
  price: number,
  status: string
}

export default function TableRow(props: TableRowProps) {
  const { title, category, image, item, price, status } = props;
  const statusClass = cx({
    "float-start icon-status": true,
    pending: status === 'pending',
    success: status === 'success',
    failed: status === 'failed',
  })

  return (
    <tr className="align-middle">
        <th scope="row">
            <img className="float-start me-3 mb-lg-0 mb-3" style={{ objectFit: 'cover', borderRadius: 10 }} src={image}
                width={80} height={60} alt="" />
            <div className="game-title-header">
                <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
                <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
            </div>
        </th>
        <td>
            <p className="fw-medium color-palette-1 m-0">{item}</p>
        </td>
        <td>
            <p className="fw-medium text-start color-palette-1 m-0"><NumericFormat value={price} prefix="Rp" displayType="text" thousandSeparator="." decimalSeparator="," /></p>
        </td>
        <td>
            <div>
                <span className={statusClass}></span>
                <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                    {status}</p>
            </div>
        </td>
    </tr>
  )
}