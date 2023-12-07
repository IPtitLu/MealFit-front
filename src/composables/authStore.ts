import axios from 'axios';
import { reactive, readonly } from 'vue';
import router from '@/router';
import type { User } from '../interface/globalInterfaces';

interface AuthStoreState {
    user: User | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
}

const state = reactive<AuthStoreState>({
    user: null,
    token: localStorage.getItem('user') || null,
    isLoading: false,
    error: null
});

const methods = {
    async fetchUser() {
        if (!state.token) return;

        try {
            state.isLoading = true;
            const response = await axios.get<User>(`http://localhost:3333/api/users/me`, {
                headers: {
                    Authorization: `Bearer ${state.token}`
                }
            });
            state.user = response.data;
            console.log(response.data)
        } catch (err) {
            console.error(err);
            state.error = 'Erreur lors de la récupération des données utilisateur';
        } finally {
            state.isLoading = false;
        }
    },

    setUserToken(token: string) {
        localStorage.setItem('user', token);
        state.token = token;
        this.fetchUser();
    },

    logout() {
        localStorage.removeItem('user');
        state.token = null;
        state.user = null;
        router.push('/');
    }   
};

// Appel initial pour récupérer les données utilisateur si le token est présent
if (state.token) {
    methods.fetchUser();
}

export const useAuthStore = () => {
    return {
        state: readonly(state),
        ...methods
    };
}
