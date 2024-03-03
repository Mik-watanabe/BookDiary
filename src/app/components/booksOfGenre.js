"use client";
import { useEffect, useState } from "react";
import axios from "axios";

//Receives a genre as a prop, calls the api with it, and shows the receieved books.
export default function BooksOfGenre(props) {
  //Lon, Lat API 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={e9dc30a76caa67c782fb10c3ba6c49a1}'
  let bookApi =
    `https://www.googleapis.com/books/v1/volumes?q=subject:${props.genre}&key=AIzaSyBZXbZPX-12tWacIAjBgXWSpvLDHg50Bt4`;
  let [bookData, setBookData] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: bookApi,
      responseType: "json",
    }).then((response) => {
      setBookData(response.data);
    });
  }, []);

  return bookData ? (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold">{props.genre}</h1>
      <div className="carousel carousel-left p-4 space-x-4 bg-neutral">
        {bookData.items.map((book) => {
          console.log(book);
          return (
            <div className=" w-[25%] carousel-item">
              <figure>
                <img
                //Returns another image saying "Image not found" if the api does not return any image links. Size has been
                  src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg" }
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
