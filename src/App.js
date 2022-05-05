import './App.css';
import {useState, useEffect ,useRef} from 'react'
import SearchResults from './components/SearchResults';

function App() {
  
  const [data, setData] = useState(undefined);
  const inputRef = useRef(null);

  useEffect(() => {
    if(inputRef){
      inputRef.current.focus();
    }
  },[])


  const handleInputChange = (e) =>{
    e.preventDefault();

    const {value} = e.target;
    
    if(!value){
      setData(undefined);
      return
    }

    const url = `https://viacep.com.br/ws/${value}/json/`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data));
  };

  console.log('Data', data);

  return (
    <div className='container'>
      <form>
        <label htmlFor='search'>Busque seu CEP</label>
        <input name="search" id="search" onChange={handleInputChange} ref={inputRef}/>
      </form>
        <SearchResults data={data}/>
    </div>
  );
}

export default App;
