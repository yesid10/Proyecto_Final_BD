import axios from 'axios';
import {create} from 'zustand';

export const useProduct = create((set) => ({

    //Estados iniciales
    products: [],
    loading: false,
    error: null,

    getPeoducts: async () => {

        const URL_API = "http://localhost:8080/api/v1/categories/";
        
        set({
            loading: true,
            error: null
        });

        try {
            const response = await axios.get(`${URL_API}list`);
        console.log(response)
        set({
            products: response.data,
            loading: false,
        })
        } catch (error) {
            set({
                loading: false,
                error: error.message
            });
        }

        
    }
}));

