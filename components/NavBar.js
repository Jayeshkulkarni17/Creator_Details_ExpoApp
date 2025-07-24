import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ThemeContext } from "../ThemeContext";

const NavBar = () => {
  const { theme, toggleTheme, isDark } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <StatusBar
        barStyle={theme.mode === "dark" ? "light-content" : "dark-content"}
        backgroundColor={theme.navBackground}
      />
      <View style={[styles.navBar, { backgroundColor: theme.navBackground }]}>
        <Text style={[styles.navTitle, { color: theme.navText }]}>
          Creators Detail
        </Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.toggleBtn}>
          <Text style={{ color: theme.navText, fontWeight: "bold" }}>
            {isDark ? "🌙" : "☀️"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {},
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    height: 75,
    paddingHorizontal: 22,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: "#222",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
    justifyContent: "space-between",
    marginBottom: 15,
  },
  navTitle: {
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  toggleBtn: {
    padding: 8,
    borderRadius: 16,
  },
});

export default NavBar;
