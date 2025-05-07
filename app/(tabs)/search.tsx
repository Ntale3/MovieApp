import { images } from '@/constants/images'
import fetchPopularMovies from '@/services/api';
import useFetch from '@/services/useFetch';
import { useRouter } from 'expo-router';
import {  ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import MovieCard from '../components/MovieCard';
import { icons } from '@/constants/icons';
import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
import { updateSearchCount } from '@/services/appwrite';


const Search = () => {

  const router =useRouter();
  const [searchQuery,setSearchQuery]=useState('');
  
  const{data:movies,
       loading:moviesLoading,
       errors:movieErrors,
       reset,
       refetch:loadMovies
 
     }= useFetch(() =>
       fetchPopularMovies(
        { query: searchQuery })
        ,false)
 
        useEffect(()=>{
        
          const timeOutId=setTimeout(async()=>{
            if(searchQuery.trim()){
              await loadMovies()
             
            }else{
              reset()
            }
          },500);
          
          return()=>clearTimeout(timeOutId);
        },[searchQuery])
  return (
    <View className='flex-1 bg-primary'>
      <Image
      source={images.bg}
      className='flex-1 absolute z-0 w-full ' resizeMode='cover'
      />

      <FlatList
      data={movies}
      renderItem={({item})=>(        
        <MovieCard
        {...item}      
        />
    
      )}
      keyExtractor={(items)=>items.id.toString()}
     numColumns={3}
     className='px-5'
     columnWrapperStyle={{
      justifyContent:'center',
      gap:16,
      marginVertical:16,

     }}
     contentContainerStyle={{paddingBottom:100}}

     ListHeaderComponent={
      <>
      <View className='w-full flex-row justify-center mt-20 items-center'>
        <Image
        source={icons.logo}
        className='w-12 h-10'
        />
      </View>

      <View className='my-5'>
        <SearchBar
        placeholder='Search for movies'
        value={searchQuery}
        onChangeText={(text)=>setSearchQuery(text)}

        />
      </View>

      {
        moviesLoading&&(
          <ActivityIndicator
          size={'large'}
          color='#000ff'
          className='my-3'
          />
        )
      }

{
  movieErrors&&(
    <Text className='text-red-500 px-5 my-3'>
      Error:{movieErrors?.message}
    </Text>
  )
}
{!moviesLoading&&!movieErrors&&searchQuery.trim()&&movies?.length>0&&(
<Text className='text-xl text-white font-bold'>
  Search Results for 
  <Text className='text-accent'>
   { searchQuery}
  </Text>
</Text>
)}

      
      
      </>

      
     }
ListEmptyComponent={
  !moviesLoading&&!movieErrors?(

    <View className='mt-10 px-5'>
      <Text className='text-center text-gray-500'>
        {searchQuery.trim()?'No Movies found': 'Search for Movies'}

      </Text>
    </View>

  ):null
}
      
      />

     
      


    </View>
  )
}

export default Search
