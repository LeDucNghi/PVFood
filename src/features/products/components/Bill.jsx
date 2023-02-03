import "./styles/Bill.css";

import { useEffect, useState } from "react";

import { Divider } from "@mui/material";
import { Images } from "constants/images";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { selectInfo } from "features/checkout/checkoutSlice";
import { useSelector } from "react-redux";

export default function Bill() {
  var [rows, setRows] = useState([]);

  const info = useSelector(selectInfo);

  useEffect(() => {
    handleSetRows();
  }, [info]);

  const handleSetRows = () => {
    if (info) {
      info.info.shoppingInfo.items.map((items) => {
        const newRows = [
          ...rows,
          createRow(
            `${items.name}`,
            items.qty,
            `${parseFloat(items.price * 1000).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND", // minimumFractionDigits: 3,
            })}`,
            `${parseFloat(items.price * items.qty * 1000).toLocaleString(
              "it-IT",
              {
                style: "currency",
                currency: "VND", // minimumFractionDigits: 3,
              }
            )}`
          ),
        ];

        rows = newRows;
        return setRows(rows);
      });
    }
  };

  function createRow(desc, qty, unit, subItemPrice) {
    return {
      desc,
      qty,
      unit,
      subItemPrice,
    };
  }
  return (
    <div className="bill_container">
      <div className="bill_detail_container">
        <Divider variant="middle" />

        <div className="bill_detail_date_id">
          <p>Invoice: #{info.orderId} </p>
          <p>{info.billTime} </p>
        </div>

        <div className="bill_detail_img">
          <img src={Images.logo} alt="" />
        </div>

        <Divider>Invoice</Divider>

        <div className="bill_detail_info">
          <p>{info.info.userInfo.fullName} </p>
          <p>{info.info.userInfo.phone} </p>
          <p>{info.info.userInfo.address} </p>
        </div>

        <Divider variant="middle" />

        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Details
                </TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Desc</TableCell>
                <TableCell align="right">Qty.</TableCell>
                <TableCell align="right">Unit</TableCell>
                <TableCell align="right">Sum</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length !== 0 &&
                rows.map((row) => (
                  <TableRow key={row.desc}>
                    <TableCell>{row.desc}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">{row.unit}</TableCell>
                    <TableCell align="right">{row.subItemPrice}</TableCell>
                  </TableRow>
                ))}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">
                  {parseFloat(
                    info.info.shoppingInfo.subtotalPrice * 1000
                  ).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND", // minimumFractionDigits: 3,
                  })}
                </TableCell>
              </TableRow>

              {/*  */}

              <TableRow>
                <TableCell colSpan={2}>Ship</TableCell>
                <TableCell align="right">
                  {parseFloat(
                    info.info.shoppingInfo.shipPrice * 1000
                  ).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND", // minimumFractionDigits: 3,
                  })}
                </TableCell>
              </TableRow>

              {/* <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Promo</TableCell>
                <TableCell align="right">
                  {parseFloat(
                    info.info.shoppingInfo.subtotalPrice * 1000
                  ).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND", // minimumFractionDigits: 3,
                  })}
                </TableCell>
              </TableRow> */}

              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell align="right">
                  {`-${info.info.shoppingInfo.promoCodes.ticketPercent}%`}
                </TableCell>
                <TableCell align="right">
                  {parseFloat(
                    info.info.shoppingInfo.finalPrice * 1000
                  ).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND", // minimumFractionDigits: 3,
                  })}
                </TableCell>
              </TableRow>

              {/* <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">
                  {`${parseFloat(
                    info.info.shoppingInfo.finalPrice * 1000
                  ).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND", // minimumFractionDigits: 3,
                  })} - ${info.info.shoppingInfo.promoCodes.ticketPercent}`}
                </TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
        </TableContainer>

        <Divider variant="middle" />

        <div className="bill_detail_footer">
          <p>govapanvat@gmail.com </p> &#8739;
          <p>Đường số 1, phường 16, quận Gò Vấp </p> &#8739; <p>0931303515</p>
        </div>
      </div>
    </div>
  );
}
