import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native'; // NOVO!

import AppNavigator from "./src/navigation/AppNavigator"; // NOVO!

export default function App() {
  return (
    <NavigationContainer> // TUDO DEVE ESTAR ENVOLVIDO
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <AppNavigator /> // CHAME O NAVEGADOR AQUI
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", 
  },
});