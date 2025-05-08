import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'

const Save = () => {
  return (
    <View className='bg-primary flex-1'>
      <Image source={images.bg} className='absolute w-full '/>
    <View className='flex justify-center items-center flex-1 flex-col gap-5'>
     <Image source={icons.save} tintColor='#fff' className='size-10'/>
     <Text className='text-white font-bold text-xl'>Profile</Text>


    </View>
   </View>
  )
}

export default Save

const styles = StyleSheet.create({})