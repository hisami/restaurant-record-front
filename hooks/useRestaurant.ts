import { useQuery } from "react-query";
import axios from "axios";

type Restaurant = {
  id: number;
  name: string;
};

export const useFetchRestaurant = (): {
  isLoading: boolean;
  restaurantList: Restaurant[];
} => {
  const { isLoading, data: restaurantList } = useQuery(
    "restaurants",
    async () => {
      const result = await axios.get("http://localhost:8080/api/restaurants");
      return result.data;
    }
  );

  return { isLoading, restaurantList };
};
