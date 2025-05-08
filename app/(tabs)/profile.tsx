import { icons } from '@/constants/icons'
import {Image, ImageBackground, Text, View } from 'react-native'

const Profile = () => {
  return (
    <View className='bg-primary flex-1'>
     <View className='flex justify-center items-center flex-1 flex-col gap-5'>
      <Image source={icons.person} tintColor='#fff' className='size-10'/>
      <Text className='text-white font-bold text-xl'>Profile</Text>


     </View>
    </View>
  )
}

export default Profile

