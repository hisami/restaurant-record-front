import { useQuery } from "react-query";
import axios from "axios";

import { API_URL } from "../config";

type Restaurant = {
  id: number;
  name: string;
};

type GoogleRestaurant = {
  name: string;
};

export const useFetchRestaurant = (): {
  isLoading: boolean;
  restaurantList: Restaurant[];
} => {
  const { isLoading, data: restaurantList } = useQuery(
    "restaurants",
    async () => {
      const result = await axios.get(`${API_URL}/restaurants`);
      return result.data;
    }
  );

  return { isLoading, restaurantList };
};

export const useFetchGoogleRestaurant = (
  location: string
): {
  isLoading: boolean;
  googleRestaurantList: GoogleRestaurant[];
} => {
  const { isLoading, data: googleRestaurantList } = useQuery(
    ["googleRestaurants", location],
    async () => {
      const result = await axios.get(`${API_URL}/google-restaurants`, {
        params: { location: location },
      });
      return result.data;
    }
  );

  return { isLoading, googleRestaurantList };
};
