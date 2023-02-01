// import axiosClient from "./axiosClient";
// import { bill } from "app/rootApi";

// export const checkoutApi = {
//   getAll: () => {
//     const url = `${bill}`;
//     return axiosClient.get(url);
//   },

//   order: (data) => {
//     const url = `${bill}`;
//     return axiosClient.post(url, data);
//   },

//   getOrderById: (id) => {
//     const url = `${bill}/${id}`;
//     return axiosClient.get(url);
//   },

//   changeStatus: (data) => {
//     console.log("🚀 ~ file: checkoutApi.js ~ line 21 ~ data", data);
//     const url = `${bill}/${data.id}`;
//     return axiosClient.patch(url, {
//       status: data.status,
//     });
//   },
// };
