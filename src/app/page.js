import Navbar from './components/navbar'
import BooksOfGenre from './components/booksOfGenre'

export default function App(){
  return (<div>
    <Navbar></Navbar>
    <BooksOfGenre genre="Fiction"/>
    <br/>
    <BooksOfGenre genre="Fantasy"/>
  </div>)
}