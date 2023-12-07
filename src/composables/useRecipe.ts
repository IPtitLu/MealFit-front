// useRecipe.ts
import axios from 'axios';
import { ref } from 'vue';
import { useRecipeStore } from './recipeStore';

interface Recipe {
    id: number;
    title: string;
    image: string;
}

interface RandomRecipe {
    results : {
        title: string;
        image: string;
    }
}

export function useRecipe() {
    const isLoading = ref(false);
    const error = ref<string | null>(null);
    const recipeStore = useRecipeStore();

    const suggestRecipes = async (ingredients: string[]): Promise<void> => {
        // Vérifie si le store a déjà des recettes
        if (recipeStore.state.recipes.length > 0) {
            return; // Quitte la fonction si des recettes sont déjà présentes
        }

        isLoading.value = true;
        error.value = null;

        try {
            const response = await axios.post<Recipe[]>('http://localhost:3333/api/recipes/suggest', ingredients);

            console.log('recipes : ', response.data);

            recipeStore.setRecipes(response.data.map(({ title, image }) => ({ title, image })));
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Une erreur inconnue est survenue';
        } finally {
            isLoading.value = false;
        }
    };

    return { isLoading, error, suggestRecipes };
}