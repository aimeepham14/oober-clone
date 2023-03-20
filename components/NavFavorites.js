import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';

const data = [
    {
        id:"123",
        icon: "home",
        location: "Home",
        destination: "San Francisco, CA, USA",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "Oakland, CA, USA",
    },
];

const NavFavorites = () => {
  return (  
    <FlatList 
        data={data} 
        keyExtractor={(item) => item.id} 
        renderItem={({item}) => (
            <TouchableOpacity>
                <Text>Yo</Text>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavFavorites

const styles = StyleSheet.create({})