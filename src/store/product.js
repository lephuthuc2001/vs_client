import { create } from "zustand";
import { produce } from "immer";
import apiService from "../app/apiService";

const useProductStore = create((set) => ({
  products: [],
  currentProductPerPage: 8,
  currentCategory: "All",
  isLoading: false,
  error: null,
  getProducts: async (category, type, query) => {
    try {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (type) {
        params.type = type;
      }

      if (query) {
        params.query = query;
      }

      set(
        produce((state) => {
          state.isLoading = true;
        })
      );

      const response = await apiService.get("/products", {
        params,
      });

      const data = await response.data.data;

      set(
        produce((state) => {
          state.products = data;
          state.currentProductPerPage =
            category === state.currentCategory
              ? state.currentProductPerPage
              : 8;
          state.currentCategory = category || query || "All";
        })
      );
    } catch (error) {
      set(
        produce((state) => {
          state.error = error;
        })
      );
    } finally {
      set(
        produce((state) => {
          state.isLoading = false;
        })
      );
    }
  },
  updateCurrentProductPerPage: (num) => {
    set(
      produce((state) => {
        state.currentProductPerPage = num;
      })
    );
  },
}));

export default useProductStore;
