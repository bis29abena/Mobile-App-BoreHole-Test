import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { COLORS, SIZES } from "../../../constants";

import styles from "./nearbyjobs.style";

const Yield = () => {
  const [data, setData] = useState({
    Final_DWL: "",
    SWL: "",
    Pump_Setting: "",
    Buffer_: "",
    Qt: "",
  });

  const handleCalculate = () => {
    console.log(data);
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View style={{ marginTop: SIZES.small }}>
        <Text style={styles.title}>Yield</Text>
        <Text style={styles.header}>Van Tonder Equation = (Qt/St) X Smax</Text>
        <Text style={styles.header}>SWL = Static Water Level</Text>
        <Text style={styles.header}>DWL = Dynamic Water Level</Text>
        <Text style={styles.header}>Qt = Discharger</Text>
        <Text style={styles.header}>Qmax = Yield</Text>
        <Text style={styles.header}>Smax = Available Drawdown</Text>
        <Text style={styles.header}>St = Maximum Drawdown</Text>
      </View>

      <View style={styles.loginPageContainer}>
        <Text style={styles.header}>Please fill all the fields</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Final DWL"
            placeholderTextColor="gray"
            name="Final_DWL"
            value={data.Final_DWL}
            keyboardType="numeric"
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Final_DWL: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="SWL"
            placeholderTextColor="gray"
            keyboardType="numeric"
            name="SWL"
            value={data.SWL}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, SWL: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Pump Setting"
            placeholderTextColor="gray"
            keyboardType="numeric"
            name="Pump_Setting"
            value={data.Pump_Setting}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Pump_Setting: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Buffer"
            placeholderTextColor="gray"
            keyboardType="numeric"
            name="Buffer_"
            value={data.Buffer_}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Buffer_: text };
              })
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Qt"
            placeholderTextColor="gray"
            keyboardType="numeric"
            name="Qt"
            value={data.Qt}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Qt: text };
              })
            }
          />
        </View>

        <Button onPress={handleCalculate} title="Calculate" color="#0F52BA" />
      </View>
    </ScrollView>
  );
};

export default Yield;
