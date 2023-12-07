// recipeStore.ts
import { reactive, readonly } from 'vue';

interface Recipe {
    id: string,
    title: string;
    image: string;
}

interface RecipeStoreState {
    recipes: Recipe[];
    randomRecipes: Recipe[];
    favoritesRecipes: Recipe[];
}

const state = reactive<RecipeStoreState>({
    recipes: [],
    randomRecipes: [],
    favoritesRecipes: []
});

const methods = {
    setRecipes(recipes: Recipe[]) {
        state.recipes = recipes;
    },
    setRandomRecipes(recipes: Recipe[]) {
        state.randomRecipes = recipes;
    },
    setFavoritesRecipes(recipes: Recipe[]) {
        state.favoritesRecipes = [...recipes];
        console.log('store 1111 : ', state.favoritesRecipes);
    }
};

export function useRecipeStore() {
    return {
        state: readonly(state),
        ...methods
    };
}
