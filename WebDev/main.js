const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a3752991988575cff09da660307caa99&page=1";

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    //use this data.results accordingly
    //maybe call another function here and pass this data.results there
}

// let b = document.querySelector("button");
// b.addEventHandler("click", )
