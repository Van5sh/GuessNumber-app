import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <View style={styles.inputContainer}>{children}</View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        width: '90%',
        elevation: 80,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.75,
        shadowRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.input,
        padding: 20,
    }
})

export default Card;