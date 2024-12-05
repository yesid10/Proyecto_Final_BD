import axios from "axios";
import Swal from "sweetalert2";
import { create } from "zustand";

export const useProduct = create((set) => ({
  //Estados iniciales
  productos: [],
  cart: [],
  totalPrice: 0,
  productSelected:
    JSON.parse(sessionStorage.getItem("productSelected")) || null,
  categories: [],
  loading: false,
  error: null,
  selectedCategory: "Ruanas",
  cantidadComprar: 1,

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

  functionGetProducts: async () => {
    const URL_API_Products = "http://localhost:8080/api/v1/products/list";

    set({
      loading: true,
      error: null,
    });

    try {
      const response = await axios.get(`${URL_API_Products}`);
      console.log(response.data);
      set({
        productos: response.data,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: error.message,
      });
    }
  },
  addProduct: async (productData) => {
    set({ loading: true, error: null });

    const URL = "http://localhost:8080/api/v1/products/save";
    try {
      const response = await axios.post(`${URL}`, productData);
      console.log("respuesta de post", response.data);

      set((state) => ({
        productos: [...state.productos, response.data],
        loading: false,
      }));
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },

  setCategory: (category) => set({ selectedCategory: category }),

  setProductSelected: (product) => {
    set({ productSelected: product });
    sessionStorage.setItem("productSelected", JSON.stringify(product));
  },
  setCantidadComprar: (cantidad) => {
    // sessionStorage.removeItem("cart");
    set({
      cantidadComprar: cantidad,
      // cart: []
    });
  },

  setPriceTotal: (price) => set({ totalPrice: price }),

  addCart: (product, cantidadSeleccionada) => {
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.productoId === product.productoId
      );

      const updatedCart = existingProduct
        ? state.cart.map((item) =>
            item.productoId === product.productoId
              ? { ...item, quantity: item.quantity + cantidadSeleccionada }
              : item
          )
        : [...state.cart, { ...product, quantity: cantidadSeleccionada }];
      Swal.fire({
        title: "Good job!",
        text: "Agregado al carrito correctamente!",
        icon: "success",
      });

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
    set((state) => {
      const updateCart = state.cart.filter(
        (item) => item.productoId !== productId
      );

      sessionStorage.setItem("cart", JSON.stringify(updateCart));
      return { cart: updateCart };
    }),

  clearCart: () => {
    sessionStorage.removeItem("cart");
    set({ cart: [] }); // Limpia el carrito
  },

//   removeFromProducts: (productId) =>
//     set((state) => {
//       const updateProducts = state.productos.filter(
//         (item) => item.productoId !== productId
//       );

//       return { productos: updateProducts };
//     }),

  removeFromProducts: (productId) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Este producto será eliminado de la lista.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        set((state) => {
          const updatedProducts = state.productos.filter(
            (item) => item.productoId !== productId
          );
          return { productos: updatedProducts };
        });
        Swal.fire("Eliminado", "El producto ha sido eliminado.", "success");
      }
    });
  },
}));
