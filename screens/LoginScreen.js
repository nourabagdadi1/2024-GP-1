import { View, Text, TouchableOpacity, Image, TextInput, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icons from "react-native-heroicons/solid";
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async ()=>{
      if(email && password){
          try{
              await signInWithEmailAndPassword(auth, email, password);
          }catch(err){
              console.log('got error: ',err.message);
              let msg = err.message;
              if(msg.includes('invalid-login-credentials')) msg = "Invalid credentials";
              if(msg.includes('auth/invalid-email')) msg = "Invalid email";
              Alert.alert('Sign In', msg);
          }
      }
  }
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView  className="flex ">
        <View className="flex-row justify-end">
        <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-[#82C8FF] p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            >
                <Icons.ArrowRightIcon size="20" color="white" />
            </TouchableOpacity>
        </View>
        <View  className="flex-row justify-center">
          <Image source={require('../assets/images/logo.png')} 
          style={{width: 100, height: 50}} />
        </View>
        
        
      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
        className="flex-1 bg-white px-8 pt-8">
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">البريد الالكتروني</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="البريد الالكتروني"
              value={email}
              onChangeText={value=> setEmail(value)}
            />
            <Text className="text-gray-700 ml-4">كلمة المرور</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              placeholder="ادخل كلمة المرور"
              value={password}
              onChangeText={value=> setPassword(value)}
            />
            <TouchableOpacity className="flex items-end">
              <Text className="text-gray-700 mb-5">نسيت كلمة المرور؟</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={handleSubmit}
              className="py-3 rounded-xl"style={{ backgroundColor: themeColors.lightb }}>
              
                <Text 
                    className="text-xl font-bold text-center text-gray-700"
                >
                        تسجيل الدخول
                </Text>
             </TouchableOpacity>
            
          </View>
          
        
          <View className="flex-row justify-center mt-7">
          <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                  <Text className="font-semibold text-[#82C8FF] underline">انشئ حساب</Text>
              </TouchableOpacity>
              <Text className="text-gray-500 font-semibold">
                  مستخدم جديد؟
              </Text>
              
          </View>
          
      </View>
    </View>
  )
}