import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import Banner from "./Component/Banner/banner";

import requests from './requests';
import Row from './Component/Row/row';
import Header from "./Component/Nav/nav";
import Footer from "./Component/Footer/Footer";
function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Row 
      title="NETFLIX ORIGINAL"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="movieShow" fetchUrl={requests.fetchmovieShow}/>
      {/* <Row title="Top Rated"fetchUrl={requests.fetchTrending}/> */}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}
      />
      <Footer   />
     </div>
  );
}

export default App;

// fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
// fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
// fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
// fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
// fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
// fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
// fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// fetchmovieShow: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`