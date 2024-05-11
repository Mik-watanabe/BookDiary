import Link from "next/link";
import Image from "next/image";

//A single book display on the search page
export default function Book(props) {
  const { book } = props;
  return (
    <div className={`flex flex-row h-[200px] ${props.className}`}>
      <div>
        <Link href={`/book/${book.id}`}>
          <div className="relative h-full w-[150px]">
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
        </Link>
      </div>
      <div className="flex flex-col ml-[20px]">
        <Link href={`/book/${book.id}`}>
          <h2 className="text-[30px]">{book.volumeInfo.title}</h2>
        </Link>
        <h3 className="text-[20px]">
          Author: {book.volumeInfo.authors
            ? book.volumeInfo.authors[0]
            : "No author found"}
        </h3>
        <div className="line-clamp-5">{book.volumeInfo.description}</div>
      </div>
    </div>
  );
}
