import { Image, ImageBackground,Text} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'

const _Layout = () => {
  return (
   <Tabs>
<Tabs.Screen
name="index"
options={
    {
        title:"Home",
        headerShown:false,
       tabBarIcon: ({focused})=>{
          <>
          <ImageBackground
        source={images.highlight}
        className='flex flex-row w-full flex-1 min-w-[112px]'
          >
        <Image
source={images.home}
tintColor="#151312" className='size-5'
        />

          </ImageBackground>
          </>
       }
    }
}

/>

<Tabs.Screen
name="search"
options={
    {
        title:"Search",
        headerShown:false
    }
}


/>

<Tabs.Screen
name="save"
options={
    {
        title:"Save",
        headerShown:false
    }
}

/>
<Tabs.Screen
name="profile"
options={
    {
        title:"Profile",
        headerShown:false
    }
}

/>
   </Tabs>
  )
}

export default _Layout

