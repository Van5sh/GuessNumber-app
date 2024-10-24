import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

interface GuessLogItemProps {
  roundNumber: number;
  guess: number;
}

const GuessLogItem: FC<GuessLogItemProps> = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.ItemText}>#{roundNumber}</Text>
      <Text style={styles.ItemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.accentorange,
    borderWidth: 3,
    borderRadius: 30,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accentyellow,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
  },
  ItemText: {
    fontFamily: 'open-sans'
  },
})

export default GuessLogItem;