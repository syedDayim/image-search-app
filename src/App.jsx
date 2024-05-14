import './App.css'
import searchImage from "./Api"
import SearchBar from './components/SearchBar'

function App() {
  
  function handleSubmit(term){
    console.log("Do a search with " + term)
  }

  return (
    <>
      <SearchBar onSubmit = { handleSubmit } />
    </>
  )
}

export default App
