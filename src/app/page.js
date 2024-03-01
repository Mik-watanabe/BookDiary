"use client";
import { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  //Lon, Lat API 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={e9dc30a76caa67c782fb10c3ba6c49a1}'
  let bookApi =
    "https://www.googleapis.com/books/v1/volumes?q=subject:Fantasy&key=AIzaSyBZXbZPX-12tWacIAjBgXWSpvLDHg50Bt4";
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
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">
        Fantasy
      </h1>
      <ul>
        {bookData.items.map((book) => {
          console.log(book);
          return <li key={book.id}>{book.volumeInfo.title}</li>
        })}
      </ul>
    </div>
  ) : (
    <p>Fetching</p>
  );
}
