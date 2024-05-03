"use client";
import axios from "axios";
import Navbar from "@/app/components/navbar";
import Intro from "@/app/components/intro";
import Divider from "@/app/components/divider";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Search() {
  const searchParams = useSearchParams();
  let [books, setBooks] = useState();
  //The default startIndex used by the api is 0
  let [startIndex, setStartIndex] = useState(0);
  const title = searchParams.get("title");

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.post("/getbooks", {
        query: `q=intitle:${title}&startIndex=${startIndex}&maxResults=10`,
      });
      console.log(response);
      setBooks(response.data);
    };
    fetchData();
  }, [title, startIndex]);

  return (
    <div className="text-white">
      <Navbar />
      <Intro className="my-[100px]">
        <span className="text-[42px]  ">Find a Book here</span>
      </Intro>
      <Divider className="mb-[30px]"/>
      <div>
        {books
          ? books.items
            ? <>
            <div className='flex justify-center mb-[30px]'>
              Found {books.totalItems} matches for "{title}"
            </div>
            {books.items.map((book) => {
                return (
                  <Link href={`/book/${book.id}`} className="w-full flex">
                    <h1 key={book.id}>
                      {book.volumeInfo.title} -{" "}
                      {book.volumeInfo.authors
                        ? book.volumeInfo.authors[0]
                        : "No author found"}
                    </h1>
                  </Link>
                );
              })}
              </>
            : "No results found"
          : "Fetching..."}
          <button className="bg-black" onClick={() => {setStartIndex(startIndex + 1)}}>Next</button>
      </div>
    </div>
  );
}
