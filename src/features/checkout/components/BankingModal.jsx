import CreditCard from "components/Common/CreditCard/CreditCard";
import CustomModal from "components/Common/Modal/Modal";
import { Images } from "constants/images";
import { bankingInfo } from "__mock__";

export default function BankingModal({ deliverId, open, setOpen }) {
  const style = {
    width: "600px",
    height: "600px",
    overflow: deliverId === 3 ? "" : "auto",
    bgcolor: deliverId === 3 ? "transparent" : "",
    padding: deliverId === 3 ? 0 : "",
    boxShadow: deliverId === 3 ? "none" : null,
  };

  return (
    <CustomModal style={style} openModal={open} onClose={() => setOpen(!open)}>
      {deliverId === 2 ? (
        bankingInfo.map((item, key) => {
          return (
            <CreditCard
              key={key}
              bankName={item.bankingName}
              bankHost={item.bankingHost}
              bankNumber={item.bankNumber}
            />
          );
        })
      ) : (
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          src={Images.momoQR}
          alt=""
        />
      )}
    </CustomModal>
  );
}
