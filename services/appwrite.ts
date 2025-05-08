// import { Client, Databases, ID, Query } from "react-native-appwrite";
// const DATABASEID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
// const COLLECTIONID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

//  const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)
    

// const database=new Databases(client);


// export const updateSearchCount = async (query: string, movie: Movie) => {
// try{
// const result=await database.listDocuments(DATABASEID,COLLECTIONID,[
//     Query.equal('searchTerm',query)
// ])

// if(result.documents.length>0){
//     const existingMovie=result.documents[0];
//     await database.updateDocument(
//         DATABASEID,
//         COLLECTIONID,
//         existingMovie.$id,{
//             count:existingMovie.count+1
//         }
//     )
// }else{
//     await database.createDocument(
//         DATABASEID,
//         COLLECTIONID,
//         ID.unique(),
//         {
//             searchTerm:query,
//             movie_id:movie.id,
//             title:movie.title,
//             count:1,
//             poster_url:`https://image.tmdb.org/t/p/w500${movie.poster_path}`
//         }
//     )
// }

// }catch(error){
//     console.log(error);
//     throw error;
// }
    

// }