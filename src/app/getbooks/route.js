require("dotenv").config();
import axios from "axios";

let APIKEY = process.env.APIKEY;
export async function POST(request) {
  const data = await request.json();
  let genre = data.genre;
  let bookApi = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&key=${APIKEY}`;
  const books = await axios({
    method: "get",
    url: bookApi,
  }).then(resp => resp.data);
  console.log(books);
  return Response.json(books);
}
