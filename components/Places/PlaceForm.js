import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constant/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import { Place } from "../../models/Place";

const PlaceForm = ({onCreatePlace}) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [pickedLocation, setPickedLocation] = useState();
  const [selectedImage, setSelectedImage] = useState();

  const handleChangeTitle = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  const ImageTakenHandler = (imageUri) => {
    setSelectedImage(imageUri);
  };

  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);
  const savePlaceHandler = () => {
    const placeData = new Place(enteredTitle, selectedImage , pickedLocation )
    onCreatePlace(placeData)
   
  };
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeTitle}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onImageTaken={ImageTakenHandler} />
      <LocationPicker onLocationPick={pickLocationHandler} />
      <Button onPress={savePlaceHandler} >Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;
const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    color: Colors.primary500,
    fontWeight: "bold",
    fontSize: 20,
  },
  input: {
    backgroundColor: Colors.primary100,
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    borderRadius: 2,
  },
});
