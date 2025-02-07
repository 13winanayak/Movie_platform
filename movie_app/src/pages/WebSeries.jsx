// eslint-disable-next-line no-unused-vars
import React from 'react'
import MovieCarousel from '../components/MovieCarousel/MovieCarousel'
const indianWebSeries = [
    { title: "Scam 1992: The Harshad Mehta Story", image: "/src/assets/indian_ws/scam.jpeg", languages: "Hindi" },
    { title: "Mirzapur", image: "/src/assets/indian_ws/mirzapur.jpeg", languages: "Hindi" },
    { title: "Sacred Games", image: "/src/assets/indian_ws/sacred.jpeg", languages: "Hindi" },
    { title: "Paatal Lok", image: "/src/assets/indian_ws/patal.jpeg", languages: "Hindi" },
    { title: "Asur: Welcome to Your Dark Side", image: "/src/assets/indian_ws/asur.jpeg", languages: "Hindi" },
    { title: "The Family Man", image: "/src/assets/indian_ws/family.jpeg", languages: "Hindi" },
    { title: "Panchayat", image: "/src/assets/indian_ws/pan.jpeg", languages: "Hindi" },
    { title: "Aspirants", image: "/src/assets/indian_ws/aspirants.jpeg", languages: "Hindi" },
    { title: "Kota Factory", image: "/src/assets/indian_ws/kota.jpeg", languages: "Hindi" },
    { title: "Criminal Justice", image: "/src/assets/indian_ws/criminal.jpeg", languages: "Hindi" },
    { title: "Delhi Crime", image: "/src/assets/indian_ws/delhi.jpeg", languages: "Hindi" },
    { title: "Rangbaaz", image: "/src/assets/indian_ws/rang.jpeg", languages: "Hindi" },
    { title: "Breathe", image: "/src/assets/indian_ws/breate.jpeg", languages: "Hindi" },
    { title: "Indori ishq", image: "/src/assets/indian_ws/indori.jpeg", languages: "Hindi" },
    { title: "Bhaukaal", image: "/src/assets/indian_ws/bahukal.jpeg", languages: "Hindi" },
    { title: "Undheki", image: "/src/assets/indian_ws/undheki.jpeg", languages: "Hindi" },
    { title: "Aashram", image: "/src/assets/indian_ws/ashram.jpeg", languages: "Hindi" },
    { title: "Taaza Khabar", image: "/src/assets/indian_ws/taza.jpeg", languages: "Hindi" },
    { title: "Jamnapaar", image: "/src/assets/indian_ws/jamna.jpeg", languages: "Hindi" },
    { title: "Arya", image: "/src/assets/indian_ws/aarya.jpeg", languages: "Hindi" }
  ];
  const globalWebSeries = [
    { title: "Breaking Bad", image: "/src/assets/global_ws/breaking.jpeg", languages: "English" },
    { title: "Game of Thrones", image: "/src/assets/global_ws/game.jpeg", languages: "English" },
    { title: "Stranger Things", image: "/src/assets/global_ws/stranger.jpeg", languages: "English" },
    { title: "Money Heist", image: "/src/assets/global_ws/money.jpeg", languages: "Spanish" },
    { title: "Dark", image: "/src/assets/global_ws/dark.jpeg", languages: "German" },
    { title: "The Witcher", image: "/src/assets/global_ws/witcher.jpeg", languages: "English" },
    { title: "Sherlock", image: "/src/assets/global_ws/sherlock.jpeg", languages: "English" },
    { title: "The Boys", image: "/src/assets/global_ws/boys.jpeg", languages: "English" },
    { title: "House of the Dragon", image: "/src/assets/global_ws/house.jpeg", languages: "English" },
    { title: "Peaky Blinders", image: "/src/assets/global_ws/peaky.jpeg", languages: "English" },
    { title: "The Mandalorian", image: "/src/assets/global_ws/star.jpeg", languages: "English" },
    { title: "Squid Game", image: "/src/assets/global_ws/squid.jpeg", languages: "Korean" },
    { title: "Westworld", image: "/src/assets/global_ws/west.jpeg", languages: "English" },
    { title: "Lupin", image: "/src/assets/global_ws/lupin.jpeg", languages: "French" },
    { title: "Black Mirror", image: "/src/assets/global_ws/black.jpeg", languages: "English" },
    { title: "Narcos", image: "/src/assets/global_ws/narcos.jpeg", languages: "English, Spanish" },
    { title: "Vikings", image: "/src/assets/global_ws/vikings.jpeg", languages: "English" },
    { title: "Better Call Saul", image: "/src/assets/global_ws/better.jpeg", languages: "English" },
    { title: "The Crown", image: "/src/assets/global_ws/crown.jpeg", languages: "English" },
    { title: "Alice in Borderland", image: "/src/assets/global_ws/alice.jpeg", languages: "Japanese" }
  ];
  
export default function WebSeries() {
  return (
   
<div>
      <MovieCarousel title="&nbsp;Indian&nbsp;&nbsp;&nbsp;web&nbsp;&nbsp;&nbsp;series" movies={indianWebSeries} />
      <MovieCarousel title="&nbsp;Global&nbsp;&nbsp;&nbsp;web&nbsp;&nbsp;&nbsp;series" movies={globalWebSeries} />
</div>
  )
}
