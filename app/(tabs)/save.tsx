import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { favoriteMoviesStore } from '@/services/FavoritesStore'
const Save = () => {
  const favorites=favoriteMoviesStore((state:any)=>state.favorites);
  
  return (
    <View className='bg-primary flex-1'>
{/*      
    <FlatList
    data={favorites}
    keyExtractor={(item)=>item.id}
    renderItem={(item)=>(
      <View>
        
      </View>
    )}
    
    
    /> */}

    
   </View>
  )
}

export default Save

const styles = StyleSheet.create({})