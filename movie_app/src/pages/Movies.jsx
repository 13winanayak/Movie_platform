import React from 'react'
import MovieCarousel from '../components/MovieCarousel/MovieCarousel'



const bollywoodMovies = [
  { title: "Animal", image: "/src/assets/bollywoodMovies/animal.jpeg", languages: "Hindi", slug:"animal" },
  { title: "Dunki", image: "/src/assets/bollywoodMovies/dunki.jpeg", languages: "Hindi", slug:"dunki"},
  { title: "Fighter", image: "/src/assets/bollywoodMovies/fighter.jpeg", languages: "Hindi", slug:"fighter" },
  { title: "Sam Bahadur", image: "/src/assets/bollywoodMovies/ss.jpeg", languages: "Hindi", slug:"sambahadur" },
  { title: "Gadar 2", image: "/src/assets/bollywoodMovies/gadar2.jpeg", languages: "Hindi", slug:"gadar2" },
  { title: "Tiger 3", image: "/src/assets/bollywoodMovies/tiger.jpeg", languages: "Hindi", slug:"tiger3" },
  { title: "OMG 2", image: "/src/assets/bollywoodMovies/omg.jpeg", languages: "Hindi", slug:"omg2" },
  { title: "Satyaprem Ki Katha", image: "/src/assets/bollywoodMovies/spk.jpeg", languages: "Hindi", slug:"satyapremkikatha" },
  { title: "Bholaa", image: "/src/assets/bollywoodMovies/bhola.jpeg", languages: "Hindi", slug:"bhola" },
  { title: "Rocky Aur Rani Ki Prem Kahani", image: "/src/assets/bollywoodMovies/rocky.jpeg", languages: "Hindi", slug:"rockyranikikhani" },
  { title: "Teri Baaton Mein Aisa Uljha Jiya", image: "/src/assets/bollywoodMovies/teribato.jpeg", languages: "Hindi", slug:"teribaato" },
  { title: "Chandu Champion", image: "/src/assets/bollywoodMovies/cc.jpeg", languages: "Hindi", slug:"chanduchampion" },
  { title: "Merry Christmas", image: "/src/assets/bollywoodMovies/mc.jpeg", languages: "Hindi | Tamil", slug:"merrychristmas" },
  { title: "Yodha", image: "/src/assets/bollywoodMovies/yodha.jpeg", languages: "Hindi", slug:"yodha" },
  { title: "Bhool Bhulaiyaa 3", image: "/src/assets/bollywoodMovies/bb3.jpeg", languages: "Hindi", slug:"bb3" },
  { title: "laapta ladies", image: "/src/assets/bollywoodMovies/lapta.jpeg", languages: "Hindi", slug:"laptaladies" },
  { title: "Jigra", image: "/src/assets/bollywoodMovies/jigra.jpeg", languages: "Hindi", slug:"jigra" },
  { title: "The Crew", image: "/src/assets/bollywoodMovies/crew.jpeg", languages: "Hindi", slug:"crew" },
];


const hollywoodMovies = [
  { title: "Mission: Impossible – The Final Reckoning", image: "/src/assets/hollywood/mission.jpeg", languages: "English", slug:"missionimpossible" },
  { title: "Captain America: Brave New World", image: "/src/assets/hollywood/captain.jpeg", languages: "English", slug:"captainamerica" },
  { title: "Thunderbolts", image: "/src/assets/hollywood/thunder.jpeg", languages: "English", slug:"thunderbolts" },
  { title: "Snow White", image: "/src/assets/hollywood/snow.jpeg", languages: "English, chinese", slug:"snowwhite" },
  { title: "Mickey 17", image: "/src/assets/hollywood/mickey.jpeg", languages: "English", slug:"mickey17" },
  { title: "Bob Marley: One Love", image: "/src/assets/hollywood/bob.jpeg", languages: "English", slug:"bobmarley" },
  { title: "Daredevil: Born Again", image: "/src/assets/hollywood/dare.jpeg", languages: "English, Japanese", slug:"daredevil" },
  { title: "Sinners", image: "/src/assets/hollywood/sinners.jpeg", languages: "English, chinese", slug:"sinners" },
  { title: "King of Kings", image: "/src/assets/hollywood/king.jpeg", languages: "English, Japanese", slug:"kingofkings" },
  { title: "Gladiator II", image: "/src/assets/hollywood/gla.jpeg", languages: "English", slug:"gladiator2" },
  { title: "Rebel Ridge", image: "/src/assets/hollywood/rebel.jpeg", languages: "English, chinese", slug:"rebelridge" },
  { title: "Twilight of the Warriors: Walled In", image: "/src/assets/hollywood/twilight.jpeg", languages: "English", slug:"twilightoftheWarriors" },
  { title: "Bad Boys: Ride or Die", image: "/src/assets/hollywood/bad.jpeg", languages: "English, Japanese", slug:"badBoys" },
  { title: "Beverly Hills Cop: Axel", image: "/src/assets/hollywood/beverly.jpeg", languages: "English", slug:"beverlyHillsCop:Axel" },
  { title: "The Gorge", image: "/src/assets/hollywood/gorge.jpeg", languages: "English, Japanese", slug:"theGorge" },
  { title: "Ballerina", image: "/src/assets/hollywood/balle.jpeg", languages: "English", slug:"ballerina" },
  { title: "Maria", image: "/src/assets/hollywood/maria.jpeg", languages: "English, chinese", slug:"maria" },
  { title: "Wolf Man", image: "/src/assets/hollywood/wolfman.jpeg", languages: "English", slug:"wolfman" },
  { title: "Paddington 3", image: "/src/assets/hollywood/paddi.jpeg", languages: "English, Japanese", slug:"paddington3" },
  { title: "Minecraft: The Movie", image: "/src/assets/hollywood/minecraft.jpeg", languages: "English", slug:"minecraft" },
];




export default function Movies() {
  return (
    // <div>
    //   <CarouselSlider />
    // </div>

<div>
      <MovieCarousel title="&nbsp;Bollywood&nbsp;&nbsp;&nbsp;Movies" movies={bollywoodMovies} />
      <MovieCarousel title="&nbsp;Hollywood&nbsp;&nbsp;&nbsp;Movies" movies={hollywoodMovies} />
</div>
  )
}
