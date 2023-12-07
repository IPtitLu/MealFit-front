// recipeStore.ts
import { reactive, readonly } from 'vue';

interface Recipe {
    title: string;
    image: string;
}

interface RecipeStoreState {
    recipes: Recipe[];
}

const state = reactive<RecipeStoreState>({
    recipes: []
});

const methods = {
    setRecipes(recipes: Recipe[]) {
        console.log(recipes);
        state.recipes = recipes;
    }
};

export function useRecipeStore() {
    return {
        state: readonly(state),
        ...methods
    };
}
