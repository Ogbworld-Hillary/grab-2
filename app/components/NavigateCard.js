import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Screen from './Screen'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { setDestination } from '../redux/slices/navSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from 'react-native-elements'

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <Screen style={tw`flex-1 bg-white`}>
            <Text style={tw`pb-5 text-xl font-bold text-center`}>GOOD MORNING, LARY-BIBIAN</Text>
            <View style={tw`relative z-20 flex-shrink bg-white border-t border-gray-100`}>
                <View style={tw`pb-2 bg-white`}>
                    <GooglePlacesAutocomplete
                        placeholder='Where to?'
                        styles={toInputBoxStyles}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        minLength={2}
                        onPress={(data, details = null) => {
                         dispatch(setDestination({
                            loaction: details.geometry.location,
                            description: data.description
                         }))
                        }}
                        enablePoweredByContainer={false}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en',
                        }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        
                        
                        onFail={error => console.error(error)}
                        
                        
                    />
                </View>
            </View>
            <View style={tw`relative z-10 justify-between flex-1 px-3 bg-white`}>
                <NavFavourites />
                <View style={tw`flex-row py-3 mt-3 border-t border-gray-100 justify-evenly`}>
                    <TouchableOpacity 
                        style={tw`flex-row w-24 px-4 py-3 bg-black border border-black rounded-full`}
                        onPress={() => navigation.push('RideOptionsCard')}
                    >
                        <Icon name="car" type="font-awesome" color="white" size={16} />
                        <Text style={tw`pl-3 text-center text-white`}>Ride</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={tw`flex-row w-24 px-4 py-3 bg-white border border-black rounded-full`}
                    >
                        <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
                        <Text style={tw`pl-3 text-center text-black`}>Ride</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Screen>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        flex: 0,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    textInput: {
        fontSize: 15,
        backgroundColor: '#F4F4F4',
        borderRadius: 5,
        borderEndWidth: 1,
        borderColor: '#ddd'
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})
