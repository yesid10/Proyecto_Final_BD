import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { create } from "zustand";

export const useProduct = create((set, get) => ({
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
  productToEdit: null,

  setProductToEdit: (product) => set({ productToEdit: product }),

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
 
  addProduct: async (productData, navigate) => {

    const { functionGetProducts } = get();
    set({ loading: true, error: null });
  
    const URL = "http://localhost:8080/api/v1/products/save";
    try {
      const response = await axios.post(`${URL}`, productData);
      console.log("Respuesta de post", response.data);
  
      set((state) => ({
        productos: [...state.productos, response.data],
        loading: false,
      }));
  
      // SweetAlert de éxito
      Swal.fire({
        title: "Producto agregado",
        text: "El producto se ha agregado correctamente.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        functionGetProducts();
        navigate("/productos")
      });
    
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
  
      // SweetAlert de error
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al agregar el producto. Inténtalo nuevamente.",
        icon: "error",
        confirmButtonText: "OK",
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

  updateProduct: async (productId, updatedProductData, navigate) => {

    set({ loading: true, error: null });
  
    const URL = `http://localhost:8080/api/v1/products/edit/${productId}`;
    try {
      const response = await axios.put(URL, updatedProductData);
      console.log("Respuesta de actualización", response.data);
  
      set((state) => {
        const updatedProducts = state.productos.map((product) =>
          product.productoId === productId ? { ...product, ...response.data } : product
        );
  
        return {
          productos: updatedProducts,
          loading: false,
        };
      });
  
      Swal.fire({
        title: "Producto actualizado",
        text: "El producto se ha actualizado correctamente.",
        icon: "success",
      }).then(() => {
        navigate("/")
      });
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al actualizar el producto.",
        icon: "error",
      });
    }
  },
  
}));
