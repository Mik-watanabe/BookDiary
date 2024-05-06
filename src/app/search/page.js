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
  let [books, setBooks] = useState();
  //The default startIndex used by the api is 0
  let [startIndex, setStartIndex] = useState(0);
  const title = searchParams.get("title");

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.post("/getbooks", {
        query: `q=intitle:${title}&startIndex=${startIndex}&maxResults=5`,
      });
      setBooks(response.data);
      console.log(response.data.items.length)
    };
    fetchData();
  }, [title, startIndex]);

  return (
    <div className="text-white">
      <Navbar />
      <Intro className="my-[100px]">
        <span className="text-[42px]  ">Find a Book here</span>
      </Intro>
      <Divider className="mb-[30px]" />
      <div>
        {books ? (
          books.items ? (
            <>
              <div className="flex justify-center mb-[30px] text-xl">
                Results for "{title}"
              </div>
              {books.items.slice(0,4).map((book) => {
                return (
                  <div key={book.id}>
                    <Book
                      book={book}
                      className="ml-[20px] my-[15px]"
                    />
                    <Divider className="h-[1px]" />
                    </div>
                );
              })}
                <button
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
                </button>
                {/* Clears the float so that the margin-bottom property set in app/layout.js is applied properly */}
                <div className="clear-both"/>
            </>
          ) : (
            "No results found"
          )
        ) : (
          "Fetching..."
        )}
      </div>
    </div>
  );
}
