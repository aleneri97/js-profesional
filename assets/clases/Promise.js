require('dotenv').config();

async function getTopMovies() {
	const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.API_KEY}`;
	const response = await fetch(url);
	const data = await response.json();
	return data.results;
}

console.log(getTopMovies());
