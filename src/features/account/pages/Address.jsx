import "./styles/Address.css";

import AddEditAddress from "../components/Address/AddEditAddress";
import AddressList from "../components/Address/AddressList";
import CustomModal from "components/Common/Modal/Modal";
import Loading from "components/Common/Loading/Loading";
import { useEffect } from "react";
import { useState } from "react";

export default function Address() {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
    width: "500px",
    // height: "560px",
  };

  return (
    <div className="address_container">
      <AddressList open={open} setOpen={setOpen} setIsEdit={setIsEdit} />

      <CustomModal
        style={style}
        onClose={() => setOpen(!open)}
        openModal={open}
      >
        <AddEditAddress isEdit={isEdit} />
      </CustomModal>
    </div>
  );
}
