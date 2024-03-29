import Navbar from "@/app/components/navbar";
import Intro from "@/app/components/intro";
import Divider from "@/app/components/divider";
import BooksOfGenre from "@/app/booksOfGenre";

export default function App() {
  return (
    <div className="text-white">
      <Navbar></Navbar>
      <Intro className="pt-[150px]">
        <span className="text-[42px]  ">Welcome to the Book Diary</span>
        <span className="text-[32px] w-[516px] text-center">
          test test test test test test test test test test test test test test
          test test test test test
        </span>
      </Intro>
      <Divider className="mt-[20vh]"/>
      <BooksOfGenre genre="Fiction" className="mt-[15vh]"/>
      <Divider className="mt-[20vh]"/>
      <BooksOfGenre genre="Fantasy" className="mt-[15vh]"/>
    </div>
  );
}
