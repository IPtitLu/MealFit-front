import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';

interface RegisterResponse {
    token: string;
}

interface UseRegisterReturn {
    isLoading: boolean;
    error: string | null;
    register: (firstName: string, lastName: string, email: string, password: string) => Promise<void>;
}

export function useRegister(): UseRegisterReturn {
    const isLoading = ref(false);
    const error = ref<string | null>(null);

    const register = async (firstName: string, lastName: string, email: string, password: string): Promise<void> => {
        isLoading.value = true;
        error.value = null;

        try {
            const response = await axios.post<RegisterResponse>('http://localhost:3333/api/users/register/', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            });

            console.log(response);
            // save dans store user 
            localStorage.setItem('jwt', response.data.token);
            router.push('/');
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                error.value = err.response.data.message || err.message;
            } else if (err instanceof Error) {
                error.value = err.message;
            } else {
                error.value = 'Une erreur inconnue est survenue';
            }
        } finally {
            isLoading.value = false;
        }
    };

    return { isLoading: isLoading.value, error: error.value, register };
}   