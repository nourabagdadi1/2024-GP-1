import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icons from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';


export default function SignUpScreen() {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async ()=>{
        if(email && password){
            try{
                await createUserWithEmailAndPassword(auth, email, password);
            }catch(err){
                console.log('got error: ',err.message);
                let msg = err.message;
                if(msg.includes('auth/email-already-in-use')) msg = "Email already in use"
                if(msg.includes('auth/invalid-email)')) msg = "Please use a valid email"
                Alert.alert('Sign Up', err.message);
            }
        }
    }
  return (
    <View className="flex-1 bg-white " style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className="flex ">
        <View className="flex-row justify-end">
        <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"// اعجبني الاصفر شرايكم نخليه ولا نشيله؟
            >
                <Icons.ArrowRightIcon size="20" color="white" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/logo.png')} 
                style={{width: 100, height: 50}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">الاسم</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value={username}
                onChangeText={value=> setUsername(value)}
                placeholder='ادخل الاسم الاول والاخير'
            />
            <Text className="text-gray-700 ml-4">البريد الالكتروني</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value={email}
                onChangeText={value=> setEmail(value)}
                placeholder='ادخل بريدك الالكتروني'
            />
            <Text className="text-gray-700 ml-4">كلمة المرور</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                secureTextEntry
                value={password}
                onChangeText={value=> setPassword(value)}
                placeholder='ادخل كلمة المرور'
            />
            <TouchableOpacity
                className="py-3 rounded-xl"
                onPress={handleSubmit}
                style={{ backgroundColor: themeColors.lightb }}
            >
                <Text className="text-xl font-bold text-center text-gray-700">
                    انشاء حساب
                </Text>
            </TouchableOpacity>
        </View>
        
        <View className="flex-row justify-center mt-7">
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold text-[#82C8FF] underline">تسجيل الدخول</Text>
            </TouchableOpacity>
            <Text className="text-gray-500 font-semibold">لديك حساب؟</Text>
        </View>
      </View>
    </View>
  )
}
