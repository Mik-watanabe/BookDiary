"use client";
require("dotenv").config();
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

let APIKEY = process.env.APIKEY;
//Receives a genre as a prop, calls the api with it, and shows the receieved books.
export default function BooksOfGenre(props) {
  let [bookData, setBookData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios({
        method: "post",
        url: "/getbooks",
        data: { query: `q=subject:${props.genre}` },
      });
      
      setBookData(response.data);
    };
    fetchData();
  }, []);

  return bookData ? (
    <div className={props.className}>
      <h1 className="mb-4 text-4xl text-center">{props.genre}</h1>
      <div className="overflow-y-scroll">
        <div className="flex flex-row w-fit ml-[30px] items-end">
          {
            //Returns "No results found if no matching results are found
            bookData.items
              ? bookData.items.map((book) => {
                  console.log(book);
                  return (
                    <Link
                      href={`/book/${book.id}`}
                      className="flex-col w-[240px] p-[20px]"
                      key={book.id}
                    >
                        <div className="w-[200px] h-[270px] relative">
                          <Image
                            //Returns another image saying "Image not found" if the api does not return any image links. Size has been
                            src={
                              book.volumeInfo.imageLinks
                                ? book.volumeInfo.imageLinks.thumbnail
                                : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                            }
                            fill={true}
                            alt={book.volumeInfo.title}
                          />
                        </div>
                      <h2 className="truncate text-center">
                        {book.volumeInfo.title}
                      </h2>
                    </Link>
                  );
                })
              : "No results found"
          }
        </div>
      </div>
    </div>
  ) : (
    <p>Fetching</p>
  );
}
