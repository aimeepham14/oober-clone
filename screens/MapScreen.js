import { Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

  return (
    <View>
        <View style={tw`h-1/2`}>
            <Map /> 
        </View>

        <View style={tw`h-1/2`}>

        </View>
    </View>
  );
};

export default MapScreen;

