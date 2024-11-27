import axios from "axios";
import { create } from "zustand";

export const useProduct = create((set) => ({
  //Estados iniciales
  productos: [],
  cart: [],
  totalPrice: 0,
  productSelected: null,
  cantidadComprar: 1,
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

  setProductSelected: (product) => set({ productSelected: product }),

  setCantidadComprar: (cantidad) => set({ setCantidadComprar: cantidad }),
  
  setPriceTotal: (price) => set({ totalPrice: price}),

  addCart: (product) => {
  
    set((state) => {
      const existingProduct = state.cart.find((item) => item.productoId === product.productoId);
 

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.productoId === product.productoId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else{
        return {
            cart: [...state.cart, {...product, quantity: 1}],
        }
      }
    });
  },

  


  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  incrementQuantity: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
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
