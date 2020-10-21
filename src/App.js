import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Nabvbar from './components/Navbar'
import MovieCard from './components/MovieCard'

function App() {

  const [searchPhrase, setSearchPhrase] = useState('')
  const [results, setResults] = useState([])
  const [endSearch, setEndSearch] = useState(false)
  const [searchedPhrase, setSearchedPhrase] = useState('')

  const handleChange = (e) => {
    setSearchPhrase(e.target.value)
  }

  const handleClick = () => {
    setEndSearch(false)
    const options = {
      method: 'GET',
      url: 'https://rapidapi.p.rapidapi.com/lookup',
      params: {term: searchPhrase , country: 'us'},
      headers: {
        'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
        'x-rapidapi-key': 'API KEY'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setResults(response.data.results)
      setEndSearch(true)
      setSearchedPhrase(searchPhrase)

    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <div className="App">
      <Nabvbar value={searchPhrase} onChange={handleChange} onClick={handleClick} />
      <br/>
       { endSearch ? <h4> <span className="violetColor">{results.length} </span> Movies found with search key <span className="violetColor">{searchedPhrase}</span> </h4>: ''}
      <br/><br/>
      <div className="movies-container">
          {results.map(item => {
            return <MovieCard subTitle={item.name.substring(0,22)} title={item.name} picture={item.picture} available={item.locations[0].display_name} link={item.locations[0].url} /> 
          })}
      </div>
    </div>
  );
}

export default App;
