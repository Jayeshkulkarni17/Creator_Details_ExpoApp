import React, { useRef, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Linking,
} from "react-native";
import { ThemeContext } from "../ThemeContext";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const SocialIcon = ({ onPress, children }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.12,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
    onPress();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const CreatorCard = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  const openLink = (url) => {
    Linking.openURL(url);
  };

  // Theme-based styles
  const dynamicStyles = {
    cardContainer: {
      backgroundColor: theme.card,
      shadowColor: theme.shadow,
    },
    image: {
      borderColor: theme.accent,
      backgroundColor: theme.imageBackground,
    },
    name: {
      color: theme.text,
    },
    category: {
      color: theme.primary,
    },
    followers: {
      color: theme.secondaryText,
    },
    bio: {
      color: theme.secondaryText,
    },
    link: (platformColor) => ({
      color: platformColor,
      backgroundColor: theme.linkBackground,
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    }),
  };

  return (
    <View style={[styles.cardContainer, dynamicStyles.cardContainer]}>
      <View style={styles.container}>
        <Image
          source={{ uri: data.image }}
          style={[styles.image, dynamicStyles.image]}
        />
        <Text style={[styles.name, dynamicStyles.name]}>{data.name}</Text>
        <Text style={[styles.category, dynamicStyles.category]}>
          {data.category}
        </Text>
        <Text style={[styles.followers, dynamicStyles.followers]}>
          {data.followers} Followers
        </Text>
        <Text style={[styles.bio, dynamicStyles.bio]}>{data.bio}</Text>
        <View style={styles.links}>
          <SocialIcon onPress={() => openLink(data.social.instagram)}>
            <View style={[styles.link, dynamicStyles.link("#e4adffff")]}>
              <FontAwesome name="instagram" size={22} color="#B82EFF" />
              <Text style={{ color: "#e2a7ffff", fontWeight: "bold" }}>
                Instagram
              </Text>
            </View>
          </SocialIcon>
          <SocialIcon onPress={() => openLink(data.social.youtube)}>
            <View style={[styles.link, dynamicStyles.link("#FF3434")]}>
              <MaterialCommunityIcons
                name="youtube"
                size={24}
                color="#FF3434"
              />
              <Text style={{ color: "#fd9090ff", fontWeight: "bold" }}>
                YouTube
              </Text>
            </View>
          </SocialIcon>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 34,
    shadowOpacity: 0.16,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
    marginHorizontal: 24,
    marginBottom: 20,
    marginTop: 10,
  },
  container: {
    alignItems: "center",
    padding: 20,
    borderRadius: 34,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 60,
    borderWidth: 3,
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 1.8,
  },
  category: {
    fontSize: 17,
    letterSpacing: 1.1,
    marginVertical: 3,
  },
  followers: {
    fontSize: 17,
    fontWeight: "600",
  },
  bio: {
    marginTop: 6,
    fontSize: 15,
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 25,
  },
  links: {
    flexDirection: "row",
    marginTop: 15,
    gap: 30,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 19,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 16,
    overflow: "hidden",
    textAlign: "center",
  },
});

export default CreatorCard;
