import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { BankTypes, NominalTypes, PaymentTypes, TopUpFormProps } from "../../../services/data-types";
import PaymentFormItem from "../../molecules/TopUpItem/PaymentFormItem";
import TopUpFormItem from "../../molecules/TopUpItem/TopUpFormItem";

export default function TopUpForm(props: TopUpFormProps) {
  const { nominals, payments } = props;
  const [verifyID, setVerifyID] = useState('');
  const [bankAccountName, setBankAccountName] = useState('');
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});
  
  const router = useRouter();

  const onNominalItemChange = (data: NominalTypes) => {
    setNominalItem(data)
  }

  const onPaymentItemChange = (payment: PaymentTypes, bank: BankTypes) => {
    const data = {
      payment,
      bank
    }
    setPaymentItem(data);
  }

  const onSubmit = () => {
    if (verifyID === '' || bankAccountName === '' || nominalItem === {} || paymentItem === {}) {
      toast.error('Isi data dengan lengkap untuk melanjutkan.')
    } else {
      const data = {
        verifyID,
        bankAccountName,
        paymentItem,
        nominalItem
      }
      localStorage.setItem('data-topup', JSON.stringify(data));
      router.push('/checkout')
    }
  }

  return (
    <form action="/checkout" method="POST">
        <div className="pt-md-50 pt-30">
            <div className="">
                <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">Verify
                    ID</label>
                <input 
                  type="text" 
                  className="form-control rounded-pill text-lg" 
                  id="ID" 
                  name="ID"
                  aria-describedby="verifyID" 
                  placeholder="Enter your ID"
                  value={verifyID}
                  onChange={(e) => setVerifyID(e.target.value)} 
                />
            </div>
        </div>
        <div className="pt-md-50 pb-md-50 pt-30 pb-20">
            <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
            <div className="row justify-content-between">
                {nominals.map(nominal => (
                  <TopUpFormItem
                    nominalID={nominal._id}
                    coinQuantity={nominal.coinQuantity}
                    coinName={nominal.coinName} 
                    price={nominal.price}
                    onChange={() => onNominalItemChange(nominal)} 
                  />
                ))}
                <div className="col-lg-4 col-sm-6">
                </div>
            </div>
        </div>
        <div className="pb-md-50 pb-20">
            <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
            <fieldset id="paymentMethod">
                <div className="row justify-content-between">
                    {payments.map(payment => 
                      payment.banks.map(bank => (
                        <PaymentFormItem
                          bankID={bank._id}
                          name={bank.bankName}
                          type={payment.type}
                          onChange={() => onPaymentItemChange(payment, bank)} 
                        />
                      ))
                    )}
                    <div className="col-lg-4 col-sm-6">
                    </div>
                </div>
            </fieldset>
        </div>
        <div className="pb-50">
            <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">Bank
                Account
                Name</label>
            <input type="text" className="form-control rounded-pill text-lg" id="bankAccount"
                name="bankAccount" aria-describedby="bankAccount"
                placeholder="Enter your Bank Account Name" value={bankAccountName} onChange={(e) => setBankAccountName(e.target.value)} />
        </div>
        <div className="d-sm-block d-flex flex-column w-100">
              <button 
                type="button"
                className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
                onClick={onSubmit}
              >
                Continue
              </button>
        </div>
    </form>
  )
}
