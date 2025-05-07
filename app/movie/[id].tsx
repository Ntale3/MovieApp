import fetchPopularMovies from '@/services/api';
import useFetch from '@/services/useFetch';
import { useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native'

const url={
  url_path:'https://image.tmdb.org/t/p/w500/v4ncgZjG2Zu8ZW5al1vIZTsSjqX.jpg'
}

const MovieDetails = () => {
  const router =useRouter();
  
 const{
      data:movies,
      loading:moviesLoading,
      errors:movieErrors,

    }= useFetch(() => fetchPopularMovies({ query: '' }))

  return (
    <View className='flex-1 bg-primary'>
      <Image
      source={{uri:'https://image.tmdb.org/t/p/w500/v4ncgZjG2Zu8ZW5al1vIZTsSjqX.jpg'}}
      className='w-full h-[450px]'
      />
  <View>
    <Text className='text-white font-bold mt-3 text-[20px]'>Description</Text>
  </View>

<View>
  <Text className=' text-white font-semibold text-sm'  >
    Hdhdhdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
    Hdhdhdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
    Hdhdhdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
    Hdhdhdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh

  </Text>
</View>
    </View>
  )
}

export default MovieDetails

