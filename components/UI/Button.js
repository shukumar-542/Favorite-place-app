import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { Colors } from '../../constant/colors'

const Button = ({onPress , children}) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [styles.button , pressed && styles.pressed]} >
        <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button : {
        paddingHorizontal : 12,
        paddingVertical : 8,
        margin :  4,
        backgroundColor : Colors.primary50,
        elevation : 2, 
        shadowColor : "black",
        shadowOpacity : 0.15,
        shadowOffset : {width : 1 , height : 1},
        shadowRadius : 2, 
        borderRadius : 2
    },
    pressed : {
        opacity : 0.7
    },
    text : {
        textAlign : "center",
        fontSize : 16
    }
})