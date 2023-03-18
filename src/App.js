import './App.css';
import axios from 'axios'
import { useState } from 'react';
import Data from './component/Data'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [error, setError] = useState(null)

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=fr&id=524901&appid=05f9083a742fc6835c8f504796314f29`

  const searchLocation = (event) => {
    
    if(event.key === 'Enter') {
      setError(null)
      axios.get(url).then((res) => {
        setData(res.data)
      }).catch((error) => { 
        setError(error)
      })
      setLocation('')
    }
  }

  return (
    <main className="App">
      <header className="App-header">
        <h1>Quel temps fait il ?</h1>
      </header>
      <section className='search'>
        <div className='form'>
          <input 
          value={location} 
          onKeyDown={(event) => searchLocation(event)}
          placeholder='Entrez une ville'
          onChange={event => setLocation(event.target.value)} 
          type="text"/>
        </div>        
        {error ? (
          <div className='error'>
            <p>On dirait bien que cette ville n'existe pas.</p>
          </div>
        ) : (
          <Data data={data}/>
        )}
      </section>
    </main>
  );
}

export default App;
