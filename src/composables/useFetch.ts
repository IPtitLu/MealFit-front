import { createFetch } from "@vueuse/core";

export const useFetch = createFetch({
    baseUrl: import.meta.env.VITE_BASE_URL,
    options: {
        /*  async beforeFetch({ options }) {
             const myToken = await getMyToken()
             options.headers.Authorization = `Bearer ${myToken}`
 
             return { options }
         }, */
    },
    /* fetchOptions: {
        mode: 'cors',
    }, */
})