import { icons } from '@/constants/icons';
import fetchPopularMovies, { fetchMovieDetails } from '@/services/api';
import useFetch from '@/services/useFetch';
import { Button } from '@react-navigation/elements';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { favoriteMoviesStore } from '@/services/FavoritesStore';
interface MovieInfoProps{
  label:string;
  value?:string|number|null;
}

const MovieInfo=({label,value}:MovieInfoProps)=>(
  <View className='flex-col items-start justify-center mt-5'>
    <Text className='text-light-200 font-normal text-sm'>{label}</Text>
    <Text className='text-light-100 font-bold text-sm mt-2'>
      {value||'N/A'}
    </Text>
  </View>
)

const MovieDetails = () => {
  const router =useRouter();
  const {id}=useLocalSearchParams();
  const {data:movie,loading}=useFetch(()=>fetchMovieDetails(id as string))
  const data:any=movie;
  const AddToFavorites=favoriteMoviesStore((state:any)=>state.addToFavoriteMovies);
  const favorites=favoriteMoviesStore((state:any)=>state.favorites);
  const removeFromFavoriteMovies=favoriteMoviesStore((state:any)=>state.removeFromFavoriteMovies);
  const clear=favoriteMoviesStore((state:any)=>state.clear);
  const favAdd=(data:any)=>{    
    AddToFavorites(data);  
   
  }
 
  return (
    <View className='bg-primary flex-1'>
      <ScrollView
      contentContainerStyle={{
        paddingBottom:80
      }}
      >

        <View className=''>

          <Image
          source={{
            uri:`https://image.tmdb.org/t/p/w500${movie?.poster_path} `
          }}
          className=' w-full h-[550px]' resizeMode='stretch'
          />
        </View>

        <View className='my-5 px-5'>
          <Text className='font-bold text-xl text-white'>{movie?.title}</Text>

          <View className='flex-row items-center gap-x-1 mt-2'>
          <Text className='text-light-200 text-sm font-semibold'>{movie?.release_date.split('-')[0]}</Text>   
          <Text className='text-light-200 text-sm font-semibold'>{movie?.runtime}m</Text>          
       
        </View>

          <View className='flex-row w-[150px] items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2 justify-center' >
              
              <Image 
              source={icons.star}
              className='size-4'
              />
              <Text className='text-white font-bold text-sm py-1'>
                {Math.round(movie?.vote_average??0)}/10 
              </Text>
              <Text className='text-light-200 text-sm font-bold '>
                ({movie?.vote_count}votes)
              </Text>            
              
          </View>
          <View className='mt-3 bg-dark-200 w-[110px]' >
            <TouchableOpacity>
           <Text className='text-light-100 p-1 flex items-center
            justify-center' onPress={()=>favAdd(data)}>
              AddToFavorites
            </Text>
            </TouchableOpacity>
            
          </View>
            <MovieInfo label='Overview'value={movie?.overview}/>
            <MovieInfo 
            label='Genres'value={movie?.genres?.map((g)=>g.name).join(' - ')}/>
            <View className='flex flex-row justify-between w-1/2'>
            <MovieInfo label='Budget' value={`$${movie?.budget/1_000_000}million`}/>

            <MovieInfo label='Revenue' value={`$${Math.round(movie?.revenue)/1_000_000}`}/>

            </View>

            <View>
              <MovieInfo label='Production Company'
              value={movie?.production_companies.map((c)=>c.name).join(' - ')}
              />
            </View>
        </View>
        
        

      </ScrollView>

      <TouchableOpacity className='absolute bottom-5 flex-row
       items-center justify-center bg-light-200 
       w-full mx-3 rounded-lg font-bold'
       onPress={router.back}
       >
         <Image
         source={icons.arrow}
         className='size-5 mr-1 mt-0.5 rotate-180'
         tintColor="#fff"
         />
         <Text className='text-white font-semibold text-base py-3'>Go Back</Text>
      </TouchableOpacity>

    </View>
   
  )
}

export default MovieDetails

