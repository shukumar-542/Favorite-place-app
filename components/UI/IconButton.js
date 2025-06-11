import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, size = { size }, color, onPress }) => {
  return (
     <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 8,
    marginHorizontal: 8,
    marginVertical: 6,
  },
  pressed: {
    opacity: 0.75,
  },
});
