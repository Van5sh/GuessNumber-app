import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import React, { FC } from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressed] : styles.container}
        onPress={onPress}
        android_ripple={{ color: Colors.buttonripple }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  container: {
    backgroundColor: Colors.buttonContainer,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75
  }
});

export default PrimaryButton;