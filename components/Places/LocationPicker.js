import { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constant/colors";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { Linking } from "react-native";
import { openSettings } from "expo-linking";
import { getMapPreview } from "../../util/location";
import { useNavigation } from "@react-navigation/native";

const LocationPicker = () => {
  const navigation  = useNavigation()
  const [pickedLocation, setPickedLocation] = useState();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const verifyPermission = async () => {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    // console.log(locationPermissionInformation.status);

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permission Required",
        "Please enable location permissions in settings.",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Open Settings", onPress: () => openSettings() },
        ]
      );
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.latitude,
    });
  };
  const getOnMapHandler = () => {
    navigation.navigate("Map")
  };

  let locationPreview = <Text style={styles.text}>No Location Picked Yets!</Text>;
  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
        }}
      />
    );
   
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon={"location"} onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon={"map"} onPress={getOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text : {
    textAlign : 'center'
  }
});
