import React from 'react'
import CarouselSlider from '../components/CarouselSlider/CarouselSlider'
import MovieCarousel from '../components/MovieCarousel/MovieCarousel'



const bollywoodMovies = [
  { title: "Animal", image: "/src/assets/bollywoodMovies/animal.jpeg", languages: "Hindi" },
  { title: "Dunki", image: "/src/assets/bollywoodMovies/dunki.jpeg", languages: "Hindi" },
  { title: "Fighter", image: "/src/assets/bollywoodMovies/fighter.jpeg", languages: "Hindi" },
  { title: "Sam Bahadur", image: "/src/assets/bollywoodMovies/ss.jpeg", languages: "Hindi" },
  { title: "Gadar 2", image: "/src/assets/bollywoodMovies/gadar2.jpeg", languages: "Hindi" },
  { title: "Tiger 3", image: "/src/assets/bollywoodMovies/tiger.jpeg", languages: "Hindi" },
  { title: "OMG 2", image: "/src/assets/bollywoodMovies/omg.jpeg", languages: "Hindi" },
  { title: "Satyaprem Ki Katha", image: "/src/assets/bollywoodMovies/spk.jpeg", languages: "Hindi" },
  { title: "Bholaa", image: "/src/assets/bollywoodMovies/bhola.jpeg", languages: "Hindi" },
  { title: "Rocky Aur Rani Ki Prem Kahani", image: "/src/assets/bollywoodMovies/rocky.jpeg", languages: "Hindi" },
  { title: "Teri Baaton Mein Aisa Uljha Jiya", image: "/src/assets/bollywoodMovies/teribato.jpeg", languages: "Hindi" },
  { title: "Chandu Champion", image: "/src/assets/bollywoodMovies/cc.jpeg", languages: "Hindi" },
  { title: "Merry Christmas", image: "/src/assets/bollywoodMovies/mc.jpeg", languages: "Hindi | Tamil" },
  { title: "Yodha", image: "/src/assets/bollywoodMovies/yodha.jpeg", languages: "Hindi" },
  { title: "Bhool Bhulaiyaa 3", image: "/src/assets/bollywoodMovies/bb3.jpeg", languages: "Hindi" },
  { title: "laapta ladies", image: "/src/assets/bollywoodMovies/lapta.jpeg", languages: "Hindi" },
  { title: "Jigra", image: "/src/assets/bollywoodMovies/jigra.jpeg", languages: "Hindi" },
  { title: "The Crew", image: "/src/assets/bollywoodMovies/crew.jpeg", languages: "Hindi" },
];


const hollywoodMovies = [
  { title: "Mission: Impossible – The Final Reckoning", image: "/src/assets/mi_final_reckoning.jpeg", languages: "English" },
  { title: "Captain America: Brave New World", image: "/src/assets/captain_america_brave_new_world.jpeg", languages: "English" },
  { title: "Thunderbolts", image: "/src/assets/thunderbolts.jpeg", languages: "English" },
  { title: "Snow White", image: "/src/assets/snow_white.jpeg", languages: "English" },
  { title: "Mickey 17", image: "/src/assets/mickey_17.jpeg", languages: "English" },
  { title: "Bob Marley: One Love", image: "/src/assets/bob_marley_one_love.jpeg", languages: "English" },
  { title: "Daredevil: Born Again", image: "/src/assets/daredevil_born_again.jpeg", languages: "English" },
  { title: "Sinners", image: "/src/assets/sinners.jpeg", languages: "English" },
  { title: "King of Kings", image: "/src/assets/king_of_kings.jpeg", languages: "English" },
  { title: "Gladiator II", image: "/src/assets/gladiator_ii.jpeg", languages: "English" },
  { title: "Rebel Ridge", image: "/src/assets/rebel_ridge.jpeg", languages: "English" },
  { title: "Twilight of the Warriors: Walled In", image: "/src/assets/twilight_of_the_warriors.jpeg", languages: "English" },
  { title: "Bad Boys: Ride or Die", image: "/src/assets/bad_boys_ride_or_die.jpeg", languages: "English" },
  { title: "Beverly Hills Cop: Axel F", image: "/src/assets/beverly_hills_cop_axel_f.jpeg", languages: "English" },
  { title: "The Gorge", image: "/src/assets/the_gorge.jpeg", languages: "English" },
  { title: "Ballerina", image: "/src/assets/ballerina.jpeg", languages: "English" },
  { title: "Maria", image: "/src/assets/maria.jpeg", languages: "English" },
  { title: "Wolf Man", image: "/src/assets/wolf_man.jpeg", languages: "English" },
  { title: "Paddington 3", image: "/src/assets/paddington_3.jpeg", languages: "English" },
  { title: "Minecraft: The Movie", image: "/src/assets/minecraft_the_movie.jpeg", languages: "English" },
];


const webseries = [
  { title: "Pathaan", image: "/src/assets/m1.jpeg", languages: "Hindi" },
  { title: "Jawan", image: "/src/assets/m1.jpeg", languages: "Hindi" },
  { title: "RRR", image: "/src/assets/m1.jpeg", languages: "Telugu | Hindi" },
  { title: "RRR", image: "/src/assets/Puspha.jpeg", languages: "Telugu | Hindi" },
  { title: "RRR", image: "/src/assets/m1.jpeg", languages: "Telugu | Hindi" },
  { title: "RRR", image: "/src/assets/m1.jpeg", languages: "Telugu | Hindi" },
  { title: "RRR", image: "/src/assets/m1.jpeg", languages: "Telugu | Hindi" },
  { title: "RRR", image: "/src/assets/m1.jpeg", languages: "Telugu | Hindi" },
];

export default function Home() {
  return (
    // <div>
    //   <CarouselSlider />
    // </div>

<div>
<CarouselSlider />

      <MovieCarousel title="&nbsp;Bollywood&nbsp;&nbsp;&nbsp;Movies" movies={bollywoodMovies} />
      <MovieCarousel title="&nbsp;Hollywood&nbsp;&nbsp;&nbsp;Movies" movies={hollywoodMovies} />
      <MovieCarousel title="web series" movies={webseries} />
</div>
  )
}
