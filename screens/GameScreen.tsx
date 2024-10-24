import React, { useState, useEffect, FC } from 'react';
import { Text, View, StyleSheet, Button, Alert, FlatList } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import Colors from '../constants/colors';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min: number, max: number, exclude: number): number {
  const rndNum: number = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary: number = 1;
let maxBoundary: number = 100;

interface GameScreenProps {
  userNumber: number;
  onGameOver: (rounds: number) => void;
}

const GameScreen: FC<GameScreenProps> = ({ userNumber, onGameOver }) => {
  const initialGuess: number = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction: 'lower' | 'higher'): void => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber: number = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRound => [...prevGuessRound, newRndNumber]);
  };

  const guessRoundsLength: number = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <Text style={styles.textinstruct}>Higher or Lower</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
            +
          </PrimaryButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList 
          data={guessRounds} 
          renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsLength - itemData.index} guess={itemData.item} />} 
          keyExtractor={(item) => item.toString()} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
  },
  textinstruct: {
    fontSize: 24,
    color: Colors.accentyellow,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '80%',
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;