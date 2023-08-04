import { React, useState } from "react";
import { View, Text, TextInput, Button, Alert, ScrollView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { COLORS, SIZES } from "../../../constants";

import styles from "./pumpsizing.style";

const Pump_Sizing = () => {
  const [finalAnswer, setFinalAnswer] = useState("");
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    { label: "Short-Radius", value: "sr" },
    { label: "Long-Radius", value: "lr" },
    { label: "Open Isolation Value", value: "oiv" },

    { label: "Open Control Value", value: "ocv" },
    { label: "Tee (flow straight-through)", value: "tfst" },
    { label: "Swing Check non entry value", value: "swc" },

    { label: "Tee (flow from side branch)", value: "tffsb" },
    { label: "Sharp Entry", value: "se" },
  ]);

  const fittingValues = [
    { sr: 0.2 },
    { lr: 0.1 },
    { oiv: 0.4 },
    { ocv: 10.8 },
    { tfst: 1.2 },
    { tffsb: 0.1 },
    { se: 0.5 },
    { swc: 1 },
  ];

  const [data, setData] = useState({
    Yield: "",
    Pump_efficiency: "",
    Superficial_velocity: "",
    Elevation_head: "",
    n: "",
  });

  const handleCalculate = () => {
    var isEmpty = false;

    const p = 1000;
    const g = 9.81;

    const fits_ = [];
    var fittinValues = [];

    Object.values(data).forEach((item) => {
      if (item === "") isEmpty = true;
    });

    if (value.length < 0) {
      isEmpty = true;
    } else {
      fittinValues = value
        .filter((item) => typeof item === "string")
        .map((item) => fittingValues.find((fitting) => item in fitting));
    }

    if (fittinValues.length === 0) isEmpty = true;

    if (data.n === "") {
      isEmpty = true;
    } else {
      var n_values;

      n_values = data.n;

      if (n_values.includes(",")) {
        n_values = data.n.split(",").map((item) => Number(item));
      }
      const fittinKeys = fittinValues.map((item) => Object.keys(item)[0]);

      if (typeof n_values === "object") {
        if (n_values.length !== fittinKeys.length) {
          isEmpty = true;
        } else {
          for (let i = 0; i < n_values.length; i++) {
            const n_value = n_values[i];
            const key = fittinKeys[i];

            const f_ans = n_value * fittinValues[i][key];

            const obj = {};

            obj[key] = f_ans;

            fits_.push(obj);
          }
        }
      } else {
        const key = fittinKeys[0];

        const obj = {};

        obj[key] = Number(n_values);
        fits_.push(obj);
      }
    }

    if (isEmpty) {
      Alert.alert("Warning", "Please make sure all fields are filled", [
        {
          text: "Ok",
          style: "cancel",
        },
      ]);
    } else {
      const sumOfFitting = fits_.reduce((acc, item) => {
        return (
          acc +
          Object.values(item).reduce((objSum, value) => {
            return objSum + value;
          })
        );
      }, 0);

      const headloss =
        (sumOfFitting * Math.pow(Number(data.Superficial_velocity), 2)) /
        (2 * g);

      const pumpSizing =
        ((Number(data.Yield) *
          p *
          g *
          (headloss + Number(data.Elevation_head))) /
          (3.6 * Math.pow(10, 6) * Number(data.Pump_efficiency))) *
        1.341;

      setFinalAnswer(pumpSizing.toFixed(3));

      data.Elevation_head = "";
      data.Pump_efficiency = "";
      data.Yield = "";
      data.Superficial_velocity = "";
    }
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
            placeholder="Yield in m^3/hr"
            placeholderTextColor="gray"
            name="Yield"
            keyboardType="numeric"
            value={data.Yield}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Yield: text };
              })
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Pump efficiency"
            placeholderTextColor="gray"
            name="Pump_efficiency"
            keyboardType="numeric"
            value={data.Pump_efficiency}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Pump_efficiency: text };
              })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Superficial velocity"
            placeholderTextColor="gray"
            keyboardType="numeric"
            name="Superficial_velocity"
            value={data.Superficial_velocity}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Superficial_velocity: text };
              })
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Elevation head"
            placeholderTextColor="gray"
            name="Elevation_head"
            keyboardType="numeric"
            value={data.Elevation_head}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, Elevation_head: text };
              })
            }
          />
        </View>

        <View style={{ ...styles.inputContainer, zIndex: 999 }}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            theme="DARK"
            multiple={true}
            mode="BADGE"
            badgeDotColors={[
              "#e76f51",
              "#00b4d8",
              "#e9c46a",
              "#e76f51",
              "#8ac926",
              "#00b4d8",
              "#e9c46a",
            ]}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Separate values with comma"
            placeholderTextColor="gray"
            name="n"
            value={data.n}
            onChangeText={(text) =>
              setData((prev) => {
                return { ...prev, n: text };
              })
            }
          />
        </View>

        <Button onPress={handleCalculate} title="Calculate" color="#0F52BA" />
      </View>
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", margin: SIZES.medium}}>
        <Text style={styles.title}>
          {finalAnswer !== "" ? `Pump Size =${finalAnswer}Hp` : ""}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Pump_Sizing;
