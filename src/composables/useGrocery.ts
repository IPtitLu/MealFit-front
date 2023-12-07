import { ref } from 'vue';
import axios from 'axios';
const baseUrl = `${import.meta.env.VITE_BASE_URL}/api/groceries`;

interface IGroceryItem {
  ingredientId: string;
  qty: number;
  unit: string;
  purchaseDate?: Date;
}

interface IUserGroceryList {
  userId: string;
  items: IGroceryItem[];
}

export const useGrocery = () => {
  
  const groceryList = ref<IUserGroceryList>({ userId: '', items: [] });

  const addGroceryItem = async (userId : string, id: string, qty: number, unit: string) => {
    try {
      const response = await axios.post<IUserGroceryList>(`${baseUrl}/${userId}/add`, {
        id,
        qty,
        unit,
      });
      groceryList.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getGroceryList = async (userId: string) => {
    try {
      const response = await axios.get<IUserGroceryList>(`${baseUrl}/${userId}`);
      groceryList.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateGroceryItem = async (userId: string, itemId: string, updatedData: { qty: number; unit: string }) => {
    try {
      const response = await axios.put<IUserGroceryList>(`${baseUrl}/update/${itemId}`, updatedData);
      groceryList.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };


  return {
    groceryList,
    addGroceryItem,
    getGroceryList,
    updateGroceryItem,
  };
}