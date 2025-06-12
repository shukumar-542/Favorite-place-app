import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constant/colors";
import OutlinedButton from "../UI/OutlinedButton";

const ImagePicker = ({onImageTaken}) => {
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  const [pickedImage, setPickedImage] = useState();

  const verifyPermission = async () => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission",
        "You need to grant camera permission to use this app!"
      );
    }
    return true;
  };
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (!image.canceled && image.assets && image.assets.length > 0) {
      setPickedImage(image.assets[0].uri);
      onImageTaken(image.assets[0].uri)
    }
  };
  let imagePreview = <Text style={styles.text}>No Image taken yet!!</Text>;
  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }}  />;
  }

  //   console.log(pickedImage);

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon={"camera"} onPress={takeImageHandler} >Take Image</OutlinedButton>
    </View>
  );
};

export default ImagePicker;


const styles = StyleSheet.create({
    text : {
        textAlign : "center"
    },
    imagePreview : {
        width : "100%",
        height : 200,
        marginVertical : 8,
        justifyContent  :'center',
        backgroundColor : Colors.primary100
    },
    image : {
        width :'100%',
        height : "100%"
    }
})