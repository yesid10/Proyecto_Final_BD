import axios from 'axios';
import { create } from 'zustand';

export const useProduct = create((set) => ({

    //Estados iniciales
    productos: [],
    productSelected: null,
    cantidadComprar : 1,
    categories: [],
    loading: false,
    error: null,
    selectedCategory: "Ruanas",

    //Acciones
    functionGet: async (endpoint) => {

        const URL_API = "http://localhost:8080/api/v1/categories/";

        set({
            loading: true,
            error: null
        });

        try {
            const response = await axios.get(`${URL_API}${endpoint}`);
            set({
                categories: response.data,
                productos: response.data.flatMap(product => product.products),
                loading: false,
            })
            
        } catch (error) {
            set({
                loading: false,
                error: error.message
            });
        }
    },

    setCategory: (category) => set({selectedCategory: category}),

    setProductSelected: (product) => set({productSelected: product}),

    setCantidadComprar: (cantidad) => set({setCantidadComprar: cantidad}),
    
}));

