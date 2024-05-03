import Navbar from "@/app/components/navbar";
import Intro from "@/app/components/intro";
import Divider from "@/app/components/divider";
import BooksOfGenre from "@/app/booksOfGenre";

export default function App() {
  return (
    <div className="text-white">
      <Navbar></Navbar>
      <Intro className="pt-[150px]">
        <span className="text-[42px] leading-none">Welcome to the Book Diary</span>
        <span className="text-[32px] w-[516px] mt-[40px] text-center">
          test test test test test test test test test test test test test test
          test test test test test
        </span>
      </Intro>
      <Divider className="my-[50px]" />
      <BooksOfGenre genre="Fiction" />
      <Divider className="my-[50px]" />
      <BooksOfGenre genre="Fantasy"/>
      <footer className="bottom-0">
      <Divider className="my-[50px]" />
      </footer>
    </div>
  );
}
