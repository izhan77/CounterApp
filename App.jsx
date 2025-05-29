import {Text, View, StyleSheet, Pressable, ImageBackground} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/736x/90/48/67/904867a15f103e0ad16e8a9dbc4e3398.jpg',
      }}
      resizeMode="cover"
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.brownText}>
          Counter :<Text> {count}</Text>
        </Text>

        <Pressable onPress={increment} style={styles.pressable}>
          <Text style={styles.buttonTxt}>Click Me !</Text>
        </Pressable>

        <Pressable onPress={reset} style={styles.pressable}>
          <Text style={styles.buttonTxt}>Reset</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    gap: 35,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brownText: {
    color: '#7f5d4e',
    fontWeight: '900',
    fontSize: 50,
  },
  pressable: {
    backgroundColor: '#7f5d4e',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default App;
