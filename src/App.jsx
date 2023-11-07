import {useEffect,useState} from 'react'
import library from './mocks/books.json'
import { Books } from './component/Books.jsx'
import { Header } from './component/Header.jsx'
import { useFilters } from './hook/useFilters.js'
import './styles.css'
import { ReadingProvider } from './context/readinglistContext.jsx'
import { Filters } from './component/Filters.jsx'
import {BookToRead} from './component/BookToRead.jsx'

function App() {

  const [books,setBooks] = useState([])
  

  useEffect(()=>{
    setBooks(library.library)
  },[])

  const {filterBooks} = useFilters()

  const filteredbooks = filterBooks(books)
  
  return (
    <ReadingProvider>
      <div className='container'>
        <Header />
        <Filters bookNoFiltered={books}/>
        <Books books={filteredbooks}/>
        <BookToRead/>
      </div>
      
    </ReadingProvider>
    
    
    
  )
}

export default App;
/*
Generos:
Fantasía
Ciencia ficción
Zombies
Terror
*/
