const movie1 = document.querySelector("#movie1");
const urlMovie1 = "v=Ujs1Ud7k49M";
const card1 = document.querySelector(".card1");

const movie2 = document.querySelector("#movie2");
const urlMovie2 = "v=F3OxA9Cz17A";
const card2 = document.querySelector(".card2");

const movie3 = document.querySelector("#movie3");
const urlMovie3 = "v=xkJETg95Zmc";
const card3 = document.querySelector(".card3");

const movie4 = document.querySelector("#movie4");
const urlMovie4 = "v=yzHuQPgO3Gs&t=3s";
const card4 = document.querySelector(".card4");

const movie5 = document.querySelector("#movie5");
const urlMovie5 = "v=FwgF3-3LYsg";
const card5 = document.querySelector(".card5");

const movie6 = document.querySelector("#movie6");
const urlMovie6 = "v=hCvx75Yk6QA";
const card6 = document.querySelector(".card6");

const newMovie = document.querySelector("#newMovie");

function changeMovies(){
    card1.classList.add("none");
    card4.classList.remove("none");
    card4.classList.add("block");
    card2.classList.add("none");
    card5.classList.remove("none");
    card5.classList.add("block");
    card3.classList.add("none");
    card6.classList.remove("none");
    card6.classList.add("block");
  }

newMovie.addEventListener("click", function(ev){
  ev.preventDefault;
  changeMovies()
})


function changeUrl(urlMovie) {
  window.open(`https://www.youtube.com/watch?${urlMovie}`);
}

function openTrailer(movieNumber, urlMovie){
  movieNumber.addEventListener("click", function(ev){
  ev.preventDefault();
  changeUrl(urlMovie);
 })
}

openTrailer(movie1, urlMovie1);
openTrailer(movie2, urlMovie2);
openTrailer(movie3, urlMovie3);
openTrailer(movie4, urlMovie4);
openTrailer(movie5, urlMovie5);
openTrailer(movie6, urlMovie6);