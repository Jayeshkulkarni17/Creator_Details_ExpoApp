import React, { useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import CreatorScreen from "./screens/creatorScreen";
import NavBar from "./components/NavBar";
import { ThemeProvider, ThemeContext } from "./ThemeContext";

const ThemedApp = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <NavBar />
      <CreatorScreen />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
