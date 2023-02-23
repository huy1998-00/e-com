import axiosClient from "./axiosClient";

const ProductAPI = {
  // get all product
  getAPI: () => {
    const q = "";
    const url = `/products?q=${q}`;
    return axiosClient.get(url);
  },

  getCategory: (query) => {
    const url = `/products/category${query}`;
    return axiosClient.get(url);
  },
  // get product by ID
  getDetail: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  // get product and pagination
  getPagination: (query) => {
    const url = `/products/pagination${query}`;
    return axiosClient.post(url);
  },
};

export default ProductAPI;
