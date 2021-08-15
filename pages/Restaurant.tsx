import React from "react";
import { useState } from "react";
import { Text, View, TextInput, ScrollView, Button, Modal } from "react-native";
import tailwind from "tailwind-rn";
import * as Location from "expo-location";

import {
  useFetchRestaurant,
  useFetchGoogleRestaurant,
} from "../hooks/useRestaurant";

const Restaurant: React.FC = () => {
  const [location, setLocation] = useState("0,0");
  const { isLoading, restaurantList } = useFetchRestaurant();
  const { isLoading: isGoogleLoading, googleRestaurantList } =
    useFetchGoogleRestaurant(location);
  const [isModalOpen, setModalOpen] = useState(false);

  const getLocation = async () => {
    const location = await Location.getCurrentPositionAsync({});
    setLocation(`${location.coords.latitude},${location.coords.longitude}`);
    setModalOpen(true);
  };

  return (
    <View style={tailwind("p-6 h-full")}>
      <Text style={tailwind("text-3xl font-bold text-center")}>
        行きたいお店
      </Text>
      <TextInput
        style={tailwind("p-4 my-4 h-16 text-xl bg-gray-100 rounded-full")}
        placeholder="検索"
      />
      {!isLoading && (
        <ScrollView style={tailwind("flex flex-col")}>
          {restaurantList.map((restaurant) => {
            return (
              <View key={restaurant.id} style={tailwind("flex flex-row my-4")}>
                <View style={tailwind("bg-gray-200 w-20 h-20 mr-4 rounded")} />
                <View style={tailwind("flex flex-col justify-between")}>
                  <Text style={tailwind("text-lg font-bold")}>
                    {restaurant.name}
                  </Text>
                  <Text style={tailwind("text-base")}>広島県広島市西区</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      )}

      <View style={tailwind("my-4 h-10")}>
        <Button onPress={getLocation} title="近くのお店を検索して追加" />
      </View>

      <Modal
        visible={isModalOpen}
        animationType="fade"
        onRequestClose={() => {
          setModalOpen(false);
        }}
      >
        {!isGoogleLoading && (
          <ScrollView style={tailwind("mt-20 mx-5")}>
            {googleRestaurantList.map((googleRestaurant) => {
              return (
                <Text
                  style={tailwind("text-lg my-4")}
                  key={googleRestaurant.name}
                  onPress={() => {
                    console.log(googleRestaurant.name);
                  }}
                >
                  {googleRestaurant.name}
                </Text>
              );
            })}
          </ScrollView>
        )}
        <View style={tailwind("h-20")}>
          <Button onPress={() => setModalOpen(false)} title="Close modal" />
        </View>
      </Modal>
    </View>
  );
};

export default Restaurant;
