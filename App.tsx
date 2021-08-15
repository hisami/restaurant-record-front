import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import tailwind from "tailwind-rn";
import { QueryClient, QueryClientProvider } from "react-query";
import * as Location from "expo-location";

import Restaurant from "./pages/Restaurant";

const queryClient = new QueryClient();

const App: React.FC = () => {
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={tailwind("h-full")}>
        <Restaurant />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
