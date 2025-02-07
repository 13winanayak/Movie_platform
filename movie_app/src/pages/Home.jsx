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
  { title: "Mission: Impossible – The Final Reckoning", image: "/src/assets/hollywood/mission.jpeg", languages: "English" },
  { title: "Captain America: Brave New World", image: "/src/assets/hollywood/captain.jpeg", languages: "English" },
  { title: "Thunderbolts", image: "/src/assets/hollywood/thunder.jpeg", languages: "English" },
  { title: "Snow White", image: "/src/assets/hollywood/snow.jpeg", languages: "English, chinese" },
  { title: "Mickey 17", image: "/src/assets/hollywood/mickey.jpeg", languages: "English" },
  { title: "Bob Marley: One Love", image: "/src/assets/hollywood/bob.jpeg", languages: "English" },
  { title: "Daredevil: Born Again", image: "/src/assets/hollywood/dare.jpeg", languages: "English, Japanese" },
  { title: "Sinners", image: "/src/assets/hollywood/sinners.jpeg", languages: "English, chinese" },
  { title: "King of Kings", image: "/src/assets/hollywood/king.jpeg", languages: "English, Japanese" },
  { title: "Gladiator II", image: "/src/assets/hollywood/gla.jpeg", languages: "English" },
  { title: "Rebel Ridge", image: "/src/assets/hollywood/rebel.jpeg", languages: "English, chinese" },
  { title: "Twilight of the Warriors: Walled In", image: "/src/assets/hollywood/twilight.jpeg", languages: "English" },
  { title: "Bad Boys: Ride or Die", image: "/src/assets/hollywood/bad.jpeg", languages: "English, Japanese" },
  { title: "Beverly Hills Cop: Axel", image: "/src/assets/hollywood/beverly.jpeg", languages: "English" },
  { title: "The Gorge", image: "/src/assets/hollywood/gorge.jpeg", languages: "English, Japanese" },
  { title: "Ballerina", image: "/src/assets/hollywood/balle.jpeg", languages: "English" },
  { title: "Maria", image: "/src/assets/hollywood/maria.jpeg", languages: "English, chinese" },
  { title: "Wolf Man", image: "/src/assets/hollywood/wolfman.jpeg", languages: "English" },
  { title: "Paddington 3", image: "/src/assets/hollywood/paddi.jpeg", languages: "English, Japanese" },
  { title: "Minecraft: The Movie", image: "/src/assets/hollywood/minecraft.jpeg", languages: "English" },
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
      
</div>
  )
}
