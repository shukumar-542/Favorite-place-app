import {  Pressable, StyleSheet } from 'react-native'
import {Ionicons} from  "@expo/vector-icons"
const IconButton = ({icon , color , size , onPress}) => {
  return (
    <Pressable style={({pressed})=>[styles.button , pressed && styles.pressed]} onPress={onPress}>
        <Ionicons name={icon} color={color} size={size}/>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,    
    marginRight: 10, 
  },
  pressed: {
    opacity: 0.7,
  },
});