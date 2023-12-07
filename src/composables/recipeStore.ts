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
}

const state = reactive<RecipeStoreState>({
    recipes: [],
    randomRecipes: []
});

const methods = {
    setRecipes(recipes: Recipe[]) {
        console.log(recipes);
        state.recipes = recipes;
    },
    setRandomRecipes(recipes: Recipe[]) {
        state.randomRecipes = recipes;
    }
};

export function useRecipeStore() {
    return {
        state: readonly(state),
        ...methods
    };
}
