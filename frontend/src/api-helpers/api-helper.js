
import axios from 'axios'
export const  getAllMovies = async () => {
    const res =await axios.get("http://localhost:5000/movie").catch((err)=>console.log(err));
    let data = await res.data;
    if(res.status!==200){
        return console.log("no Data");
    }
    return data;
//     try {
//         const res = await axios.get("http://localhost:5000/movie")
//         if(res.status !==201){
//             return console.log("no data");
//         }
//         let data = await res.data;
//         return data;
//     } catch (err) {
//         return console.log(err);
//     }
}