import Image from "next/image";
import { PaymentFormItemProps } from "../../../services/data-types";

export default function PaymentFormItem(props: PaymentFormItemProps) {
  const { bankID, type, name, onChange } = props;
  return (
    <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
        htmlFor={bankID} onChange={onChange}>
        <input className="d-none" type="radio" id={bankID} name="paymentMethod" value={bankID}  />
        <div className="detail-card">
            <div className="d-flex justify-content-between">
                <p className="text-3xl color-palette-1 m-0"><span className="fw-medium">{type}</span></p>
                <Image id="icon-check" src="/icon/icon-check.svg" width={20} height={20} alt="icon-check" />
            </div>
            <p className="text-lg color-palette-1 m-0">
              {name}
            </p>
        </div>
    </label>
  )
}
