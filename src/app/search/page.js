"use client";
import axios from "axios";
import Navbar from "@/app/components/navbar";
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
        query: `intitle:${title}`,
      });
      setBooks(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {books
        ? books.items
          ? books.items.map((book) => {
              return (
                <h1 key={book.id}>
                  {book.volumeInfo.title} -{" "}
                  {book.volumeInfo.authors
                    ? book.volumeInfo.authors[0]
                    : "No author found"}
                </h1>
              );
            })
          : "No results found"
        : "Fetching..."}
    </>
  );
}
