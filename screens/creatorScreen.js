import React, { useState, useEffect, useContext } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import CreatorCard from "../components/creatorCard";
import NavBar from "../components/NavBar";
import { ThemeContext } from "../ThemeContext";

const CreatorScreen = () => {
  const { theme } = useContext(ThemeContext);
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCreators = async () => {
    try {
      setLoading(true);
      const data = require("../data/creator.json");
      setCreators(data);
    } catch (err) {
      setError("Failed to load creator data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCreators();
  }, []);

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 100 }} />;
  if (error)
    return (
      <View style={{ marginTop: 100, alignItems: "center" }}>
        <Text>{error}</Text>
        <Button title="Retry" onPress={fetchCreators} />
      </View>
    );

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <FlatList
        data={creators}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => <CreatorCard data={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default CreatorScreen;
