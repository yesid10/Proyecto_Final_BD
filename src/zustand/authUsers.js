import { create } from "zustand";
import {
  auth,
  provider,
  signInWithPopup,
  signOut,
} from "../firebase/firebase.config";
import Swal from "sweetalert2";
import axios from "axios";

export const useAuth = create((set) => ({
  //Estaos iniciales
  user: null,
  isAuthenticated: false,
  error: null,
  loading: false,
  usuarios: [],
  dataSinIn: null,
  rol: null,

  //Acciones
  loginWithGoogle: async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("desde zustand", result.user);

      set({
        user: result.user,
        isAuthenticated: true,
      });

      Swal.fire({
        title: `Hola ${user.displayName}`,  
        text: "Bienvenid@",
        icon: "success",
        confirmButtonText: "OK",
      })
      
    } catch (error) {
      console.log("Error al iniciar sesion", error);
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  },

  setUser: (user) => set({ user }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),

  logout: async () => {
    try {
      await signOut(auth);
      set({
        user: null,
        isAuthenticated: false,
      });

      Swal.fire({
        title: "Sesión cerrada",
        text: "Has cerrado sesión correctamente.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error al cerrar sesión", error);
      Swal.fire({
        title: "Error!",
        text: "No se pudo cerrar sesión.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  },

  functionGetUsers: async (endpoint) => {
    const URL_API = "http://localhost:8080/api/v1/usuarios/";
    set({
      loading: true,
      error: null,
    });

    try {
      const response = await axios.get(`${URL_API}${endpoint}`);
      console.log("response desde userAth",response.data)
      set({
        usuarios: response.data,
        isAuthenticated: true,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: error.message,
      });
    }
  },

  loginWithEmailAndPasswordDb: (data) => set({dataSinIn: data, isAuthenticated: true}),

  editUser: async (userId, updatedUser) => {
    const URL_API = `http://localhost:8080/api/v1/usuarios/edit/${userId}`;
    
    try {
      const response = await axios.put(URL_API, updatedUser); // Enviar solicitud PUT a la API
      // Actualizar el estado con la información modificada
      set((state) => ({
        usuarios: state.usuarios.map((user) =>
          user.usuarioId === userId ? { ...user, ...updatedUser } : user
        ),
      }));

      Swal.fire({
        title: "Usuario actualizado",
        text: "Los datos del usuario se han actualizado correctamente.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error al editar el usuario:", error);
      Swal.fire({
        title: "Error!",
        text: "No se pudo actualizar el usuario.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  },

  
}));
