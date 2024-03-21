"use client";
require("dotenv").config();
// remove this after
import { useEffect, useState } from "react";
import axios from "axios";

let APIKEY = process.env.APIKEY;
//Receives a genre as a prop, calls the api with it, and shows the receieved books.
export default function BooksOfGenre(props) {
  let [bookData, setBookData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios({
        method: "post",
        url: "/getbooks",
        data: { query: `subject:${props.genre}` },
      });
      setBookData(response.data);
    }
    fetchData();
  }, []);

  return bookData ? (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold">{props.genre}</h1>
      <div className="carousel carousel-left p-4 space-x-4 bg-neutral">
        {bookData.items.map((book) => {
          return (
            <div className=" w-[25%] carousel-item">
              <figure>
                <img
                  //Returns another image saying "Image not found" if the api does not return any image links. Size has been
                  src={
                    book.volumeInfo.imageLinks
                      ? book.volumeInfo.imageLinks.thumbnail
                      : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                  }
                  className="w-[10vw]"
                  alt={book.volumeInfo.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title w-[20px]">{book.volumeInfo.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <p>Fetching</p>
  );
}
