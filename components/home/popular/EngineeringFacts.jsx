import { React, useState } from "react";
import { View, Text, TextInput, Button, Alert,ScrollView } from "react-native";

import {COLORS, SIZES } from "../../../constants";


import styles from "./popularjobs.style";

const EngineeringFacts = () => {
  const [data, setData] = useState({
    SWL: "",
    Pump_Setting: "",
    Buffer_: "",
    SheetName: "",
  });
  return (
    <ScrollView style={{flex: 1, padding: 0, margin: SIZES.medium, backgroundColor: COLORS.lightWhite}}>
      <View style={{marginTop: SIZES.small}}>
        <Text style={styles.title}>Step Test Analysis</Text>
        <Text style={styles.header}>Cooper Jocobs Equation = BQ + CQ^2</Text>
        <Text style={styles.header}>SWL = Static Water Level</Text>
        <Text style={styles.header}>Q = Discharge</Text>
      </View>

      <View style={styles.loginPageContainer}>
        <Text style={styles.header}>Please fill all the fields</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="SWL"
            placeholderTextColor="gray"
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
            placeholder="Buffer"
            placeholderTextColor="gray"
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
            placeholder="Pump Setting"
            placeholderTextColor="gray"
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
            placeholder="SheetName"
            placeholderTextColor="gray"
            name="SheetName"
            value={data.SheetName}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, SheetName: text };
              })
            }
          />
        </View>
        <Button title="Select File" color="#0F52BA" />
      </View>
    </ScrollView>
  );
};

export default EngineeringFacts;
