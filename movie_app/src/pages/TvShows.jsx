
import React from 'react'
import MovieCarousel from '../components/MovieCarousel/MovieCarousel'
const starplusTVShows = [
   
    { title: "Teri Meri Doriyaann", image: "/src/assets/tvShows/teri.jpeg", languages: "Hindi" },
    { title: "Imlie", image: "/src/assets/tvShows/imly.jpeg", languages: "Hindi" },
    { title: "Barsate", image: "/src/assets/tvShows/barsate.jpeg", languages: "Hindi" },
    { title: "Pandya Store", image: "/src/assets/tvShows/pandya.jpeg", languages: "Hindi" },
    { title: "Shaurya Aur Anokhi Ki Kahani", image: "/src/assets/tvShows/shourya.jpeg", languages: "Hindi" },
    { title: "Ek Hazaaron Mein Meri Behna Hai", image: "/src/assets/tvShows/no.jpeg", languages: "Hindi" },
    { title: "Diya Aur Baati Hum", image: "/src/assets/tvShows/diya.jpeg", languages: "Hindi" },
    { title: "Kasautii Zindagii Kay", image: "/src/assets/tvShows/no.jpeg", languages: "Hindi" },
    { title: "Saath Nibhaana Saathiya", image: "/src/assets/tvShows/sath.jpeg", languages: "Hindi" },
    { title: "Saraswatichandra", image: "/src/assets/tvShows/saraswati.jpeg", languages: "Hindi" },
    { title: "Mahabharat (2013)", image: "/src/assets/tvShows/mahabharat.jpeg", languages: "Hindi" },
    { title: "Kyunki Saas Bhi Kabhi Bahu Thi", image: "/src/assets/tvShows/no.jpeg", languages: "Hindi" },
    { title: "Suhani Si Ek Ladki", image: "/src/assets/tvShows/suhani.jpeg", languages: "Hindi" },
    { title: "Ishqbaaz", image: "/src/assets/tvShows/ishq.jpeg", languages: "Hindi" },
    { title: "Saraswatichandra", image: "/src/assets/tvShows/saraswati.jpeg", languages: "Hindi" },
    { title: "Jaana Na Dil Se Door", image: "/src/assets/tvShows/no.jpeg", languages: "Hindi" },
    { title: "Nazar", image: "/src/assets/tvShows/najar.jpeg", languages: "Hindi" }
  ];
  const sonySabTVShows = [
    { title: "Taarak Mehta Ka Ooltah Chashmah", image: "/src/assets/tvShows/tarak.jpeg", languages: "Hindi" },
    { title: "Wagle Ki Duniya", image: "/src/assets/tvShows/wagle.jpeg", languages: "Hindi" },
    { title: "Maddam Sir", image: "/src/assets/tvShows/madam.jpeg", languages: "Hindi" },
    { title: "Jijaji Chhat Per Hain", image: "/src/assets/tvShows/jija.jpeg", languages: "Hindi" },
    { title: "Aladdin – Naam Toh Suna Hoga", image: "/src/assets/tvShows/aladin.jpeg", languages: "Hindi" },
    { title: "Baalveer", image: "/src/assets/tvShows/balveer.jpeg", languages: "Hindi" },
    { title: "Baalveer Returns", image: "/src/assets/tvShows/balveer_returns.jpeg", languages: "Hindi" },
    { title: "Hero – Gayab Mode On", image: "/src/assets/tvShows/hero.jpeg", languages: "Hindi" },
    { title: "Tenali Rama", image: "/src/assets/tvShows/tenali.jpeg", languages: "Hindi" },
    { title: "Lapataganj", image: "/src/assets/tvShows/lapta.jpeg", languages: "Hindi" },
    { title: "Chidiya Ghar", image: "/src/assets/tvShows/chidiyaghar.jpeg", languages: "Hindi" },
    { title: "Bhakharwadi", image: "/src/assets/tvShows/no.jpeg", languages: "Hindi" },
    { title: "Badi Door Se Aaye Hain", image: "/src/assets/tvShows/bdsah.jpeg", languages: "Hindi" },
    { title: "Gutur Gu", image: "/src/assets/tvShows/no.jpeg", languages: "Hindi" },
    { title: "Ring Wrong Ring", image: "/src/assets/tvShows/ring.jpeg", languages: "Hindi" },
    { title: "Y.A.R.O Ka Tashan", image: "/src/assets/tvShows/yaro.jpeg", languages: "Hindi" },
    { title: "Peterson Hill", image: "/src/assets/tvShows/no.jpeg", languages: "Hindi" },
    { title: "F.I.R.", image: "/src/assets/tvShows/fir.jpeg", languages: "Hindi" }
  ];  
 
  
export default function TvShows() {
  return (
<div>
      <MovieCarousel title="&nbsp;Star plus&nbsp;&nbsp;&nbsp;Shows" movies={starplusTVShows} />
      <MovieCarousel title="&nbsp;Sony sub&nbsp;&nbsp;&nbsp;Shows" movies={sonySabTVShows} />
      
</div>
  )
}
