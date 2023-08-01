import { React, useState } from "react";
import { View, Text, Pressable, Alert, Modal, TextInput, ScrollView } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import styles from "./modalview.style";

const ModalView = ({ modalVisible, setModalVisible, data, setData }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([
    "Short-Radius",
    "Long-Radius",
    "Open Isolation Value",
  ]);
  const [items, setItems] = useState([
    { label: "Short-Radius", value: "sr" },
    { label: "Long-Radius", value: "lr" },
    { label: "Open Isolation Value", value: "oiv" },

    { label: "Open Control Value", value: "ocv" },
    { label: "Tee (flow straight-through)", value: "tfst" },

    { label: "Tee (flow from side branch)", value: "tffsb" },
    { label: "Sharp Entry", value: "se" },
  ]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{...styles.inputContainer, zIndex: 999}}>
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
                placeholder="please separate values with commas"
                placeholderTextColor="gray"
                keyboardType="numeric"
                name="n"
                value={data.n}
                onChangeText={(text) =>
                  setData((prev) => {
                    return { ...prev, n: text };
                  })
                }
              />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Select Fitting</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalView;
