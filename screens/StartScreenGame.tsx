import { TextInput, Text, View, StyleSheet, Alert } from "react-native";
import React, { useState, FC } from "react";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import { StatusBar } from "expo-status-bar";
import Card from "../components/ui/Card";

interface StartGameProps {
  onPickNumber: (number: number) => void;
}

const StartGame: FC<StartGameProps> = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const numberInput = (enteredText: string): void => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = (): void => {
    setEnteredNumber("");
  };

  const confirmInput = (): void => {
    const chosenNumber: number = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      Alert.alert("Invalid Number!", "Number has to be between 0 to 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <StatusBar />
      <Card>
        <Text style={styles.instruct}>ENTER A NUMBER</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          autoCorrect={false}
          onChangeText={numberInput}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
  buttonContainer: {
    flex: 1,
    margin: 2,
  },
  instruct: {
    fontSize: 24,
    color: Colors.accentyellow,
    fontWeight: "bold",
  },
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 80,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.input,
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 18,
    margin: 8,
  },
  input: {
    height: 60,
    width: 55,
    textAlign: "center",
    fontSize: 30,
    borderBottomColor: Colors.accentyellow,
    borderBottomWidth: 5,
    color: Colors.accentyellow,
    marginVertical: 8,
  },
});

export default StartGame;