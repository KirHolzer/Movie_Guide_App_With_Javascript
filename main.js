const movieNameRef = document.getElementById('#movie-name');
const searchBtn = document.getElementById('#search-btn');

//function to fetch data from API

const getMovie = () => {
    const movieName = movieNameRef.value;
    const urlByMovie = `https://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
    // if input is empty
    if (movieName.length = 0) {
        result.innerHTML = `<h3 class = 'msg_empty'>Please enter a movie name </h3>`
    }
    else{
        fetch(urlByMovie).then((resp) => resp.json()).then((data)) => {

        }
    }


}