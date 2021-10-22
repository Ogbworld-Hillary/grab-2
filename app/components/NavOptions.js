import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { selectOrigin } from '../redux/slices/navSlice'
import { useSelector } from 'react-redux'

const data = [
    {
        id: '1224',
        title: 'Get a ride',
        image: 'https://images.dealer.com/ddc/vehicles/2021/Acura/RDX/SUV/color/Apex%20Blue%20Pearl-BA-22,40,85-640-en_US.jpg',
        screen: 'MapScreen'
    },
    {
        id: '4354',
        title: 'Order food',
        image: 'https://img.lovepik.com/element/45004/3069.png_860.png',
        screen: 'EatsScreen'
    },
]

const NavOptions = () => {
    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
             <TouchableOpacity 
                style={tw`p-2 pl-6 pb-6 pt-4 bg-gray-200 mr-4 w-40 rounded-lg`}
                onPress={() => navigation.push(item.screen)}
                disabled={!origin}
                >
                <View>
                  <Image 
                    style={{ 
                    width:120, 
                    height: 120, 
                    resizeMode: "contain" }}
                    source={{ url: item.image }} 
                  />
                 <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                 <Icon style={tw`w-10 p-2 mt-4 bg-black rounded-full`}
                    name="arrowright" 
                    color="white" 
                    type="antdesign"
                 />
                </View>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
            horizontal
      />
    )
}

export default NavOptions

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        resizeMode: 'contain'
    }
})
