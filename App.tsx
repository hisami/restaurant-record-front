import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import tailwind from "tailwind-rn";

const App: React.FC = () => {
  return (
    <SafeAreaView style={tailwind("h-full")}>
      <View style={tailwind("p-6 h-full")}>
        <Text style={tailwind("text-3xl font-bold text-center")}>
          行きたいお店
        </Text>
        <TextInput
          style={tailwind("p-4 my-4 h-16 text-xl bg-gray-100 rounded-full")}
          placeholder="検索"
        />
        <ScrollView style={tailwind("flex flex-col")}>
          <View style={tailwind("flex flex-row my-4")}>
            <View style={tailwind("bg-gray-200 w-20 h-20 mr-4 rounded")} />
            <View style={tailwind("flex flex-col justify-between")}>
              <Text style={tailwind("text-lg font-bold")}>お店の名前</Text>
              <Text style={tailwind("text-base")}>広島県広島市西区</Text>
            </View>
          </View>
        </ScrollView>
        <View style={tailwind("my-4 h-10")}>
          <Button
            onPress={() => {
              console.log("test");
            }}
            title="近くのお店を検索して追加"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
