import { create } from "zustand";
import { auth, provider, signInWithPopup, signOut,  } from "../firebase/firebase.config";
import Swal from "sweetalert2";

export const useAuth = create((set) => ({
    //Estaos iniciales
    user: null,
    isAuthenticated: false,

    //Acciones
    loginWithGoogle: async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("desde zustand", result.user)
            
            set({
                user: result.user,
                isAuthenticated: true,
            });
            
        } catch (error) {
            console.log("Error al iniciar sesion", error)
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
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
})) 