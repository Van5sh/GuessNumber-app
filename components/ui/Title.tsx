import React, { FC, ReactNode } from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

interface TitleProps {
  children: ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return (
    <Text style={styles.title}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: "15%",
    color: "#ffff",
    fontFamily: 'open-sans-bold',
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    margin: 10,
    borderColor: "#ffff",
  },
});

export default Title;