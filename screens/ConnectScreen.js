import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icons from "react-native-heroicons/solid";
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../config/firebase'



export default function ConnectScreen() {
    const navigation = useNavigation();
    return (
        <View>
          <Text>ConnectScreen</Text>
        </View>
      )
};

