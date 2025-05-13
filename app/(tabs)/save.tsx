import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { favoriteMoviesStore } from '@/services/FavoritesStore'
import { SafeAreaView } from 'react-native-safe-area-context'
const Save = () => {
  const favorites=favoriteMoviesStore((state:any)=>state.favorites);
  const removeFromFavoriteMovies=favoriteMoviesStore((state:any)=>state.removeFromFavoriteMovies);
  
 


  return (
    
    <View className='bg-primary flex-1 p-8'>
      
    <FlatList
    ListEmptyComponent={<View  className='flex-1 items-center justify-center '>
     <Text className='text-light-300 '>
      Favorites is Empty
     </Text>
    </View>}
    ListHeaderComponent={<>
    <View className='p-6'>
      <Text className='text-white text-xl'>Favorite Movies</Text>
    </View>
    </>}
    data={favorites}
    renderItem={({item})=>(
     <ScrollView
     showsVerticalScrollIndicator={false}

     >
      <View className='flex-1 gap-2 mb-4 '>
        <View className='flex-row flex-1'>
        <Image
        source={
          {
          uri:`https://image.tmdb.org/t/p/w500${item.poster_path}`
          }}
        className='w-32 h-52 rounded-lg'
        resizeMode='stretch'
        /> 
      <View className='flex-col'>
        <Text className='text-light-300 text-sm px-2 min-w-5'
        >
          {item?.overview}
        </Text>

        <Text className='text-white bg-dark-100 w-[100px] text-center mx-4 p-2 rounded-lg' 
        onPress={()=>removeFromFavoriteMovies(item.id)}
        >
          Remove
        </Text>
      </View>
        
        </View>
         
        <Text className='text-white'>
          {item.title}
        </Text>
      </View>
     </ScrollView>
    )}
    keyExtractor={(item)=>item.id}
    />

    
   </View>
   
  )
}

export default Save

