require("dotenv").config();
import axios from "axios";

let APIKEY = process.env.APIKEY;

//Recieves a query string and returns the googleapis result of that query as the response.
export async function POST(request) {
  const data = await request.json();
  let query = data.query;
  let bookApi = `https://www.googleapis.com/books/v1/volumes?${query}&key=${APIKEY}`;
  console.log(bookApi)
  const books = await axios({
    method: "get",
    url: bookApi,
  }).then(resp => resp.data);
  return Response.json(books);
}
