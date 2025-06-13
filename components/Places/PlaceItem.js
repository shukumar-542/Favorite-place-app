import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constant/colors";

const PlaceItem = ({ place, onSelect }) => {
  return (
    <Pressable onPress={onSelect} style={({pressed})=>[styles.item , pressed && styles.pressed]}>
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius : 6 ,
    marginVertical : 12,
    backgroundColor : Colors.primary500 ,
    elevation : 2 ,
    shadowColor : 'black',
    shadowOffset : {width : 1 , height : 1 },
    shadowRadius : 2,
    // marginHorizontal : 10
  },
  pressed: {
    opacity : 0.9
  },
  image: {
    flex : 1,
    borderBottomLeftRadius : 4 ,
    borderTopLeftRadius : 4 ,
    height : 100,
    // width : 100
  },
  info: {
    flex : 2,
    padding : 12

  },
  title: {
    fontWeight : "bold",
    fontSize : 18 ,
    color : Colors.gray700
  },
  address: {
    fontSize : 12,
    color : Colors.gray700
  },
});
