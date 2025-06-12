import { useCallback, useLayoutEffect, useState } from "react"
import { Alert, StyleSheet } from "react-native"
import MapView, { Marker } from "react-native-maps"
import IconButton from "../components/UI/IconButton"

const Map = ({navigation}) => {
    const [selectedLocation , setSelectedLocation]= useState()
    const region = {
        latitude : 37.78,
        longitude : -122.42,
        latitudeDelta : 0.0922,
        longitudeDelta : 0.0421,
    }

    const selectLocationHandler = (event)=>{
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;
        setSelectedLocation({lat : lat , lng : lng})
    }


    const savePickedLocationHandler = useCallback(()=>{
        if(!selectedLocation){
         Alert.alert("No Location Picker","You have to pick location first!") 
         return 
        }

        navigation.navigate("AddPlace", {
            pickedLat: selectedLocation.lat,
            pickedLng : selectedLocation.lng
        })


    }, [navigation , selectedLocation])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight : ({tintColor})=>  <IconButton icon={"save"} 
            size={24} color={tintColor} onPress={savePickedLocationHandler} />
        })
    }, [navigation , savePickedLocationHandler])


  return (
    <MapView initialRegion={region} style={styles.map} onPress={selectLocationHandler} >
        {
            selectedLocation && <Marker title="Picked Location" coordinate={{latitude : selectedLocation?.lat , longitude : selectedLocation?.lng}} />
        }
        
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({
    map :{
        flex : 1
    }
})