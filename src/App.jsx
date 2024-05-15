import React, {useState} from 'react';
import './App.css';
import searchImage from "./Api"
import SearchBar from './components/SearchBar'
import ImageList from "./components/ImageList"

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImage(term);

    setImages(result)

  }

  return (
    <>
      <SearchBar onSubmit = { handleSubmit } />
      <ImageList images = { images }/>
    </>
  )
}

export default App
