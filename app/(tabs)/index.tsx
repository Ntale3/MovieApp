import { ActivityIndicator,  FlatList,  Image, ScrollView, Text, View } from "react-native";
import '../global.css'
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "../components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import fetchPopularMovies from "@/services/api";
import { createNavigationContainerRef } from "@react-navigation/native";
import MovieCard from "../components/MovieCard";
export default function Index() {

  const router =useRouter();
  
 const{
      data:movies,
      loading:moviesLoading,
      errors:movieErrors,

    }= useFetch(() => fetchPopularMovies({ query: '' }))

  return (
    <View className="flex-1 bg-primary">
<Image source={images.bg} className="absolute w-full"/>

<ScrollView className=" flex-1 px-5 "
showsVerticalScrollIndicator={false}
contentContainerStyle={{
  minHeight:"100%",
  paddingBottom:10,

}}
>

  <Image
  source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"
  />
  {
    moviesLoading?(
      <ActivityIndicator
      size='large'
      className="mt-10 mb-3"
      />
    ):movieErrors?(
      <Text>Error:{movieErrors?.message}</Text>
    ):(
<View className="flex-1 mt-5">
  
    <SearchBar
      onPress={()=>router.push("/search")}
      placeholder="Search for a Movie"     
    />

      <>
      <Text className="text-lg font-bold mt-5 mb-3 text-white">Latest Movies</Text>
      
        <FlatList
        data={movies}
        renderItem={({item})=>(
          <MovieCard {...item}/>
        )}
        keyExtractor={(item)=>item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent:'flex-start',
          gap:20,
          marginBottom:10,
          paddingTop:5

        }}
        className="mt-2 pb-32"
        scrollEnabled={false}
        />


      </>

  </View> 
    )

  }
  



</ScrollView>
    </View>
  );
}
