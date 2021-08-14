import React from "react";
import { SafeAreaView } from "react-native";
import tailwind from "tailwind-rn";
import Restaurant from "./pages/restaurant";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={tailwind("h-full")}>
        <Restaurant />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
