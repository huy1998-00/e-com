import axiosClient from "./axiosClient";

const CartAPI = {
  //get cart user signin
  getCarts: (query) => {
    const url = `/carts${query}`;
    return axiosClient.get(url);
  },
  // add product to user cart
  postAddToCart: (query) => {
    const url = `/carts/add${query}`;
    return axiosClient.post(url);
  },
  //delete product
  deleteToCart: (query) => {
    const url = `/carts/delete${query}`;
    return axiosClient.get(url);
  },
  // update product in user cart
  putToCart: (query) => {
    const url = `/carts/update${query}`;
    return axiosClient.put(url);
  },
};

export default CartAPI;
