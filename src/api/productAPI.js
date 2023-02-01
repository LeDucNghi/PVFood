// import axiosClient from "./axiosClient";
// import { food } from "app/rootApi";
// import queryString from "query-string";

// // const foodBaseUrl = process.env.FOOD_BASE_API;

// export const productApi = {
//   getAll: (params) => {
//     const url = `${food}`;
//     return axiosClient.get(url, { params });
//   },

//   getProductDetail: (id) => {
//     const url = `${food}/${id}`;
//     return axiosClient.get(url);
//   },

//   getProductByFilter: (filterName, params) => {
//     const paramString = queryString.stringify(params);

//     const url = `${food}?${filterName}`;
//     return axiosClient.get(url);
//   },

//   getProductBySearch: (searchKeyword, params) => {
//     console.log(
//       "🚀 ~ file: productAPI.js ~ line 17 ~ {filterName, params}",
//       searchKeyword,
//       params
//     );
//     const url = `${food}?name_like=${searchKeyword}`;
//     // return axiosClient.get(url, { params });
//     return axiosClient.get(url);
//   },

//   addNewProduct: (data) => {
//     const url = `${food}`;
//     return axiosClient.post(url, data);
//   },

//   updateProduct: (data) => {
//     const { id, values } = data;
//     const url = `${food}/${id}`;
//     return axiosClient.patch(url, values);
//   },

//   deleteProduct: (id) => {
//     const url = `${food}/${id}`;
//     return axiosClient.delete(url);
//   },
// };
