import Image from "next/image";
import { NumericFormat } from 'react-number-format';
import { ContentCardProps } from "../../../services/data-types";

export default function ContentCard(props: ContentCardProps) {
  const { icon, name, title, balance } = props;
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
        <div className="categories-card">
            <div className="d-flex align-items-center mb-24">
                <Image src={icon} height={60} width={60} alt="" />
                <p className="color-palette-1 mb-0 ms-12">{name}</p>
            </div>
            <div>
                <p className="text-sm color-palette-2 mb-1">{title}</p>
                <p className="text-2xl color-palette-1 fw-medium m-0"><NumericFormat value={balance} prefix="Rp" displayType="text" thousandSeparator="." decimalSeparator="," /></p>
            </div>
        </div>
    </div>
  )
}
