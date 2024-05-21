"use client";
import axios from "axios";
import Navbar from "@/app/components/navbar";
import Intro from "@/app/components/intro";
import Divider from "@/app/components/divider";
import Book from "@/app/search/book";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();

  const [fetching, setFetching] = useState(true);

  const [books, setBooks] = useState([]);

  //Stores total number of books returned
  const [totalBooks, setTotalBooks] = useState(true);

  //Stores number of books to display
  const [booksDisplayed, setBooksDisplayed] = useState(4);

  const title = searchParams.get("title");

  useEffect(() => {
    const fetchData = async () => {
      //fetch 1 extra book to see if more can be fetched. Only 4 are added to the books variable which is displayed.
      let response = await axios.post("/getbooks", {
        query: `q=intitle:${title}&maxResults=40`,
      });
      setBooks(response.data.items);
      setTotalBooks(response.data.items.length);
      setFetching(false);
    };
    fetchData();
  }, [title]);

  return (
    <div className="text-white">
      <Navbar />
      <Intro className="my-[100px]">
        <span className="text-[42px]">Find a Book here</span>
      </Intro>
      <Divider className="mb-[30px]" />
      {fetching ? (
        "Fetching..."
      ) : books.length > 0 ? (
        <>
          <div className="flex justify-center mb-[30px] text-xl">
            Results for &quot;{title}&quot;
          </div>
          {books.slice(0, booksDisplayed).map((book) => {
            return (
              <div key={book.id}>
                <Book book={book} className="ml-[20px] my-[15px]" />
                <Divider className="h-[1px]" />
              </div>
            );
          })}
          <button
            className={`h-10 w-full text-xl border border-white rounded-lg px-2 mt-2 ${
              booksDisplayed >= totalBooks ? "disabled cursor-not-allowed" : ""
            }`}
            onClick={() => {
              setBooksDisplayed(booksDisplayed + 4);
            }}
          >
            Load more
          </button>
          {/* Clears the float so that the margin-bottom property set in app/layout.js is applied properly */}
          <div className="clear-both" />
        </>
      ) : (
        "No results found"
      )}
    </div>
  );
}
