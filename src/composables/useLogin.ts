import router from '@/router';
import axios from 'axios';
import { ref } from 'vue';
import { useAuthStore } from './authStore';

interface LoginResponse {
    token: string;
}

interface UseLoginReturn {
    isLoading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
}

export function useLogin(): UseLoginReturn {
    const isLoading = ref(false);
    const error = ref<string | null>(null);
    const authStore = useAuthStore();

    const login = async (email: string, password: string): Promise<void> => {
        isLoading.value = true;
        error.value = null;

        try {
            const response = await axios.post<LoginResponse>('http://localhost:3333/api/users/login/', {
                email: email,
                password: password
            });

            console.log(response);
            // save dans store user 
            localStorage.setItem('user', response.data.token);
            authStore.setUserToken(response.data.token);
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

    return { isLoading: isLoading.value, error: error.value, login };
}