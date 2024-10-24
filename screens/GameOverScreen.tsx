import { SafeAreaView, Text, View, Image, StyleSheet, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

interface GameOverProps {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.textV}>
          YOUR PHONE TOOK <Text style={styles.highlight}>{roundsNumber}</Text>
          TURNS TO GUESS THE NUMBER <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textV: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 24,
  },
  highlight: { fontFamily: 'open-sans-bold' },
  imageContainer: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").width * 0.8,
    borderRadius: 400,
    margin: Dimensions.get("window").width * 0.1,
    borderWidth: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});