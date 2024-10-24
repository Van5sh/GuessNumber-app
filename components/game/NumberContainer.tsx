import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import React, { FC, ReactNode } from 'react';

interface NumberContainerProps {
  children: ReactNode;
}

const NumberContainer: FC<NumberContainerProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accentyellow,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  numberText: {
    color: Colors.accentyellow,
    fontSize: 36,
  }
})