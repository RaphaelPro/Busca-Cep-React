import './App.css';
import {useState} from 'react'
import SearchResults from './components/SearchResults';

function App() {
  
  const [data, setData] = useState(undefined);

  const handleInputChange = (e) =>{
    e.preventDefault();

    //  console.log("Resultado do handle:"+ e.target.value);
    
    const {value} = e.target;
    
    if(!value) return;

    const url = `https://viacep.com.br/ws/${value}/json/`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data));
    // .then(console.log)
  };

  console.log('Data', data);

  return (
    <div className='container'>
      <form>
        <label htmlFor='search'>Busque seu CEP</label>
        <input name="search" id="search" onChange={handleInputChange}/>
      </form>
        <SearchResults data={data}/>
    </div>
  );
}

export default App;
