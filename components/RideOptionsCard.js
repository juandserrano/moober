import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectTravelTimeInformation } from '../slices/navSlice'
import 'intl'
import "intl/locale-data/jsonp/en";

const data = [
    {
        id: "Moober-skim-123",
        title: "Moober Skim",
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: "Moober-full-456",
        title: "Moober Full",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: "Moober-heavy-789",
        title: "Moober Heavy",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    }
]
const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    const SURGE_CHARGE_RATE = 1.5;

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View style={tw`-mt-9`}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("NavigateCard")
                }}
                style={tw`absolute -top-1 left-5 p-3 rounded-full`}>
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text style={tw`text-center py-1 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        onPress={() => setSelected(item)}
                        style={tw`flex-row items-center justify-between px-10 ${item.id === selected?.id ? 'bg-gray-200' : ''}`}>
                        <Image style={{ width: 80, height: 80, resizeMode: "contain"}} source={{ uri: item.image}} />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-lg font-bold`}>{item.title}</Text>
                            <Text>{travelTimeInformation?.duration?.text}</Text>
                        </View>
                        <Text style={tw`text-lg`}>
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'CAD'}).format((travelTimeInformation?.duration?.value * item.multiplier) / 100) }
                         

                        </Text>
                    </TouchableOpacity>
                )}
            />
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected ? "bg-gray-300" : ""}`}>
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
