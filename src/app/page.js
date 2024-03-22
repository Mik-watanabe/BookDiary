import Navbar from '@/app/components/navbar'
import BooksOfGenre from '@/app/booksOfGenre'

export default function App(){
  return (<div>
    <Navbar></Navbar>
    <BooksOfGenre genre="Fiction"/>
    <br/>
    <BooksOfGenre genre="Fantasy"/>
  </div>)
}