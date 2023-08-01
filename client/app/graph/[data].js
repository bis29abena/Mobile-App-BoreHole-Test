import { View } from "react-native";
import { useSearchParams } from "expo-router";

const Data = () => {
  const params = useSearchParams().data;

  console.log(params);
  return <View></View>;
};

export default Data;
