import { create } from "zustand";
import { produce } from "immer";
import apiService from "../app/apiService";

const useCartStore = create(function (set, get) {
  return {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null,
    error: null,
    getCart: async (userId) => {
      try {
        const res = await apiService.get("/cart", { params: { userId } });
        const cart = await res.data.data;

        localStorage.setItem("cart", JSON.stringify(cart));
        set(
          produce((state) => {
            state.cart = cart;
          })
        );
      } catch (error) {
        set(
          produce((state) => {
            state.error = error;
          })
        );
      }
    },
    addToCart: async (productId, price) => {
      try {
        set(
          produce((state) => {
            state.cart.items.push({ productId, quantity: 1 });
            state.cart.totalQuantity += 1;
            state.cart.totalPrice += price;
          })
        );

        localStorage.setItem("cart", JSON.stringify(get().cart));

        const res = await apiService.patch(`cart/${get().cart._id}`, {
          items: get().cart.items,
          totalPrice: get().cart.totalPrice,
          totalQuantity: get().cart.totalQuantity,
        });

        const data = await res.data.data;
      } catch (error) {
        set(
          produce((state) => {
            state.error = error;
          })
        );
      }
    },
  };
});

export default useCartStore;
