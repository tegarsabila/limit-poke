import {useState, useEffect} from 'react';
import axios from "axios";
import './App.css'
const App = () => {
  const [datas, setDatas] = useState('');
  const [search, setSearch] = useState(null);

  const fetchPosts = async () => {
    let initial_url = 'https://pokeapi.co/api/v2/pokemon?limit=';
    let url = initial_url + datas + '&offset=0';
    axios.get(url).then((response) => {
      setSearch(response.data);
    });
  };

  function getData(val) {
    setDatas(val.target.value);
  }
  
  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <div className="App">
      <h1>Limit Data Pokedex</h1>
      <div className='containerClickMe'>
        <input className='clickMeText' onChange={getData} placeholder='Masukan jumlah limit' type='number'/>
      </div>
      <div className='containerBox'>
        {
          search && search.results.map((el, index) => (
            <div className='boxList'>
              <div className='boxTextSmall'>{el.name}</div>
            </div>
          ))
        }

      </div>
    </div>
  );
};
export default App;
