import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames'

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "100 Hinchey Avenue, Ottawa, ON"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "Kanata, ON"
    }
]

const NavFavorites = () => {
    return (
        <FlatList data={data} keyExtractor={(item) => item.id} ItemSeparatorComponent={() => (
            <View style={[tw`bg-gray-200`, { height: 0.5 }]}/>
        )}
        renderItem={({item}) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
                <Icon 
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={item.icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
                <View>
                    <Text style={tw`font-bold text-lg`}>{item.location}</Text>
                    <Text style={tw`text-gray-500`}>{item.destination}</Text>
                </View>
            </TouchableOpacity>
        )}
        />
    )
}

export default NavFavorites

const styles = StyleSheet.create({})
