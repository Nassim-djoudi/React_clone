const API_KEY="72291ba9ccd4cad255b5cc5bb5dac27a";

const requests={
	fetchTrending:`3/trending/all/day?api_key=${API_KEY}`,
	fetchNetflix:`3/discover/tv?api_key=${API_KEY}&with_networks=213&language=fr`,
	fetchTopRated:`/3/movie/top_rated?api_key=${API_KEY}&language=fr`,
	fetchActionMovies:`3/discover/movie?api_key=${API_KEY}>&language=fr&with_genres=28`,
	fetchComedyMovies:`3/discover/movie?api_key=${API_KEY}>&language=fr&with_genres=35`,
	fetchActionMovies:`3/discover/movie?api_key=${API_KEY}>&language=fr&with_genres=27`,
	fetchRomanceMovies:`3/discover/movie?api_key=${API_KEY}>&language=fr&with_genres=10749`,
	fetchDocumentaries:`3/discover/movei?api_key=${API_KEY}>&language=fr&with_genres=99`

}

export default requests;