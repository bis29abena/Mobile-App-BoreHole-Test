import { React, useState } from "react";
import { View, Text, TextInput, Button, Alert,ScrollView } from "react-native";

import {COLORS, SIZES } from "../../../constants";


import styles from "./popularjobs.style";

const EngineeringFacts = () => {
  const [data, setData] = useState({
    Static_water_level: "",
    Pump_Setting: "",
    Buffer_: "",
    

  });

  const handleCalculate = () => {
    console.log(data);

  };
  return (
    
      <ScrollView
        style={{
          flex: 1,
          padding: 0,
          margin: SIZES.medium,
          backgroundColor: COLORS.lightWhite,
        }}
      >
      <View style={styles.loginPageContainer}>
        <Text style={styles.header}>Please fill all the fields</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Static water level"
            placeholderTextColor="gray"
            name="Static_water_level"
            value={data.Static_water_level}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Static_water_level: text };
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
        <Text style={styles.header}>PUMPING RATE (Q)</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Q1"
            placeholderTextColor="gray"
            name="Q1"
            value={data.Q1}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Q1: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Q2"
            placeholderTextColor="gray"
            name="Q2"
            value={data.Q2}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Q2: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Q3"
            placeholderTextColor="gray"
            name="Q3"
            value={data.Q3}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Q3: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Q4"
            placeholderTextColor="gray"
            name="Q4"
            value={data.Q4}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Q4: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Q5"
            placeholderTextColor="gray"
            name="Q5"
            value={data.Q5}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Q5: text };
              })
            }
          />
        </View>
        <Text style={styles.header}>DRAWDOWN (S)</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="S1"
            placeholderTextColor="gray"
            name="S1"
            value={data.S1}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, S1: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="S2"
            placeholderTextColor="gray"
            name="S2"
            value={data.S2}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, S2: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="S3"
            placeholderTextColor="gray"
            name="S3"          
            value={data.S3}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Q5: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="S4"
            placeholderTextColor="gray"
            name="S4"
            value={data.S4}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, S4: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="S5"
            placeholderTextColor="gray"
            name="S5"
            value={data.S5}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, S5: text };
              })
            }
          />
        </View>

        <Button onPress={handleCalculate} title="Calculate" color="#0F52BA" />
      </View>
   </ScrollView>
  );
};

export default EngineeringFacts;
