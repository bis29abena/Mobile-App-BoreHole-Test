import { SafeAreaView } from "react-native";
import { useSearchParams } from "expo-router";
import { EngineeringFacts, Pump_Sizing, Yield } from "../../components";
import { Stack } from "expo-router";

import { COLORS } from "../../constants";

const Step = () => {
  const params = useSearchParams();

  if (params.id == "Step-Test-Analysis") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen options={{ headerTitle: "" }} />
        <EngineeringFacts />
      </SafeAreaView>
    );
  } else if (params.id == "Yield") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen options={{ headerTitle: "" }} />
        <Yield />
      </SafeAreaView>
    );
  } else if (params.id == "Pump-Sizing") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen options={{ headerTitle: "" }} />
        <Pump_Sizing />
      </SafeAreaView>
    );
  }
};

export default Step;
