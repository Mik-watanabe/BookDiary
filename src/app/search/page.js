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

  //Set to false if there are no more books available to fetch
  const [moreBooks, setMoreBooks] = useState(true);

  const [books, setBooks] = useState([]);

  //The default startIndex used by the api is 0
  const [startIndex, setStartIndex] = useState(0);

  const [numBooksToDisplay, setNumBooksToDisplay] = useState(4);

  const title = searchParams.get("title");

  useEffect(() => {
    const fetchData = async () => {
      //fetch 1 extra book to see if more can be fetched. Only 4 are added to the books variable which is displayed.
      let response = await axios.post("/getbooks", {
        query: `q=intitle:${title}&maxResults=40`,
      });
      setBooks(response.data.items);
      setFetching(false);
    };
    fetchData();
  }, [title, startIndex]);
  
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
            Results for "{title}"
          </div>
          {books.slice(0, numBooksToDisplay).map((book) => {
            return (
              <div key={book.id}>
                <Book book={book} className="ml-[20px] my-[15px]" />
                <Divider className="h-[1px]" />
              </div>
            );
          })}
          {/* <button
                  className={`h-10 text-xl border border-white rounded-lg px-2 mt-2 float-left ${startIndex == 0 ? "disabled cursor-not-allowed" : ""}`}
                  onClick={() => {
                    startIndex - 4 >= 0 && setStartIndex(startIndex - 4);
                  }}
                >
                  Prev
                </button>
                <button
                  className={`h-10 text-xl border border-white rounded-lg px-2 mt-2 float-right ${books.items.length < 5 ? "disabled cursor-not-allowed" : ""}`}
                  onClick={() => {
                    startIndex + 4 < books.totalItems &&
                      setStartIndex(startIndex + 4);
                  }}
                >
                  Next
                </button> */}

          {/* Infinite scroll */}
          <button
            className={`h-10 w-full text-xl border border-white rounded-lg px-2 mt-2 ${
              !moreBooks ? "disabled cursor-not-allowed" : ""
            }`}
            onClick={() => {
              setNumBooksToDisplay(numBooksToDisplay + 4);
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
