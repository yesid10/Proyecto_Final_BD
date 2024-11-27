import { create } from "zustand";
import { auth, provider, signInWithPopup,  } from "../firebase/firebase.config";
import Swal from "sweetalert2";

export const useAuth = create((set) => ({
    //Estaos iniciales
    user: null,
    isAuthenticated: false,

    //Acciones
    loginWithGoogle: async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            
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
})) 