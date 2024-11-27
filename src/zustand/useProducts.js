import axios from "axios";
import { create } from "zustand";

export const useProduct = create((set) => ({
  //Estados iniciales
  productos: [],
  cart: [],
  totalPrice: 0,
  productSelected: JSON.parse(sessionStorage.getItem("productSelected")) || null,
  categories: [],
  loading: false,
  error: null,
  selectedCategory: "Ruanas",

  //Acciones
  functionGet: async (endpoint) => {
    const URL_API = "http://localhost:8080/api/v1/categories/";

    set({
      loading: true,
      error: null,
    });

    try {
      const response = await axios.get(`${URL_API}${endpoint}`);
      set({
        categories: response.data,
        productos: response.data.flatMap((product) => product.products),
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: error.message,
      });
    }
  },

  setCategory: (category) => set({ selectedCategory: category }),

  setProductSelected: (product) => {
    set({ productSelected: product });
    sessionStorage.setItem("productSelected", JSON.stringify(product));
  },

  setPriceTotal: (price) => set({ totalPrice: price }),

  addCart: (product) => {
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.productoId === product.productoId
      );

      const updatedCart = existingProduct
        ? state.cart.map((item) =>
            item.productoId === product.productoId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cart, { ...product, quantity: 1 }];

      // Guarda el carrito actualizado en localStorage
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));

      return { cart: updatedCart };
    });
  },

  loadCart: () => {
    const storedCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
    set({ cart: storedCart });
  },

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  incrementQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),
  decrementQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
  clearCart: () => set({ cart: [] }), // Limpia el carrito
}));
