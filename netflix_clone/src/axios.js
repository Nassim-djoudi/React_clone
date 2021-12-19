//Axios
import axios from "axios";

//Base url for requests
const instance = axios.create({
	baseURL:"https://api.themoviedb.org/",
})
export default instance; 