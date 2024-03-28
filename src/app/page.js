import Navbar from "@/app/components/navbar";
import Intro from "@/app/components/intro";
import BooksOfGenre from "@/app/booksOfGenre";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Intro>

      </Intro>
      <BooksOfGenre genre="Fiction" />
      <br />
      <BooksOfGenre genre="Fantasy" />
    </div>
  );
}
