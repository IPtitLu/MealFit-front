import { computed, ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from './authStore';
const baseUrl = `${import.meta.env.VITE_BASE_URL}/api/groceries`;

interface IGroceryItem {
  ingredientId?: string;
  qty?: number;
  unit?: string;
  name: string;
  purchaseDate?: Date;
}

interface IUserGroceryList {
  userId?: string;
  items: IGroceryItem[];
}

export const useGrocery = () => {

  const groceryList = ref<IUserGroceryList>({ userId: '', items: [] });

  const addGroceryItem = async (userId: string, groceryList: IGroceryItem[]) => {
    try {
      const token = localStorage.getItem('user');
      if (!token) {
        console.error("No token found.");
        return;
      }
  
      const response = await axios.post<IUserGroceryList>(`${baseUrl}/${userId}`, groceryList,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getGroceryList = async (userId: string) => {
    try {
      const token = localStorage.getItem('user');
      if (!token) {
        console.error("No token found.");
        return;
      }
  
      const response = await axios.get<IUserGroceryList>(`${baseUrl}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
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