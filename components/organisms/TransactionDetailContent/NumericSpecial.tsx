import { NumericFormat } from 'react-number-format';

interface NumericSpecialProps {
  label: string,
  value: string | number,
  className?: string
}

export default function Row(props: Partial<NumericSpecialProps>) {
  const { label, value, className } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label} 
      <span className={`purchase-details ${className}`}>
      <NumericFormat value={value} prefix="Rp" displayType="text" thousandSeparator="." decimalSeparator="," />
      </span>
    </p>
  )
}