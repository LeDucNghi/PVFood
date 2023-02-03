import { Images } from "constants/images";

export const fakePromoCodes = [
  {
    id: 1,
    ticketPercent: 50,
    ticketName: "Săn sale Shopee",
    ticketTime: "15/08",
    ticketDescribe:
      "Nhân dịp sinh nhật shopee, tất cả các mặt hàng áp dụng mã đều được giảm 50%",
  },
  {
    id: 2,
    ticketPercent: 30,
    ticketName: "Săn sale Lazada",
    ticketTime: "15/08",
    ticketDescribe:
      "Vào đúng ngày 15 hằng tháng, Lazada sẽ tặng bạn voucher giảm giá áp dụng với mọi mặt hàng",
  },
  {
    id: 3,
    ticketPercent: 60,
    ticketName: "Săn sale Tiki",
    ticketTime: "15/08",
    ticketDescribe:
      "Tiki gửi tặng quý khách hàng voucher giảm giá tới 60% nhân dịp sinh nhật Tiki",
  },
  {
    id: 4,
    ticketPercent: 100,
    ticketName: "Miễn phí vận chuyển",
    ticketTime: "15/08",
    ticketDescribe:
      "Shopee gửi tặng quý khách vào mỗi tháng 1 voucher miễn phí vận chuyển",
  },
  {
    id: 5,
    ticketPercent: 20,
    ticketName: "Hoàn xu",
    ticketOccasion: "",
    ticketTime: "15/08",
    ticketDescribe:
      "Áp dụng voucher này trên đơn hàng, quý khách sẽ được hoàn lại 20% xu dựa trên tổng giá trị đơn",
  },
];

export const deliveryMethods = [
  {
    id: 1,
    deliveryName: "Self pick-up",
    image: Images.selfPickup,
    checked: true,
  },
  {
    id: 2,
    deliveryName: "Delivery",
    image: Images.delivery,
    checked: false,
  },
];

export const bankingInfo = [
  {
    id: 1,
    bankingHost: "LE NGUYEN KIM VY",
    bankingName: "ACB",
    bankNumber: "3937037",
  },
  {
    id: 2,
    bankingHost: "LE NGUYEN KIM VY",
    bankingName: "BIDV",
    bankNumber: "18810000125901",
  },
  {
    id: 3,
    bankingHost: "LE NGUYEN KIM VY",
    bankingName: "TPBANK",
    bankNumber: "05915676401",
  },
];

export const momoInfo = [
  {
    id: 1,
    momoHost: "LE NGUYEN KIM VY",
    momoNumber: "0931303515",
  },
];

export const paymentMethods = [
  {
    id: 1,
    paymentName: "Payment on delivery",
    paymentDescription: "Payment by Visa or MasterCard credit card",
    image: Images.codPayment,
  },
  {
    id: 2,
    paymentName: "Banking",
    paymentDescription: "Pay by advance bank transfer",
    image: Images.bankPayment,
  },
  {
    id: 3,
    paymentName: "Momo E-Wallet",
    paymentDescription: "PAYMENT WITH INVOICE WITHIN 30 DAYS with our Partner",
    image: Images.momoPayment,
  },
];
