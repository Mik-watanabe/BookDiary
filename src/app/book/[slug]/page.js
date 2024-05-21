"use client";
import React, { useState, useEffect } from "react";
import { fetchBookData } from "@/app/lib/api";
import Image from "next/image";
import { parseDate } from "@/app/lib/utils";

export default function Page({ params }) {
  const [bookData, setBookData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const bookId = params.slug;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBookData(bookId);
        setBookData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [bookId]);
  // TODO: delete ↓
  console.log("book", bookData);

  let bookInfo = bookData?.volumeInfo;
  const formattedDate = parseDate(Date.parse(bookInfo?.publishedDate));
  return (
    <>
      {isLoading ? (
        // TODO: Add loading icon
        <div>Loading...</div>
      ) : (
        <>
          <section>
            <div className="grid grid-cols-3 gap-14">
              <div className="w-full col-span-1">
                <Image
                  src={
                    bookInfo.imageLinks
                      ? bookInfo.imageLinks.medium
                      : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                  }
                  width={300}
                  height={350}
                  className="w-full"
                  alt={bookInfo.title}
                />

                {/* TODO: turn into a component */}
                <button className="border w-full mt-4 p-1 rounded-lg border-black hover:bg-black/40 hover:text-white hover:border-opacity-20">
                  Read Sample
                </button>
              </div>
              <div className="col-span-2">
                <h1 className="text-4xl">{bookInfo?.title}</h1>
                <div className="mt-4 text-xl">
                  <div>
                    <span className="text-zinc-500">Author:</span>
                    <span className="pl-4">
                      {bookInfo?.authors.map((el) => el)}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-zinc-500">Publisher:</span>
                    <span className="pl-4">{bookInfo?.publisher}</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-zinc-500">Date of Issue:</span>
                    <span className="pl-4">{formattedDate}</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-zinc-500">Customer Review:</span>
                    {/* TODO: review */}
                    <span className="pl-4">⭐️⭐️⭐️⭐️⭐️</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="border-t border-black mt-12 pt-8">
            <h2 className="text-2xl">synopsis</h2>
            <div
              className="mt-2"
              dangerouslySetInnerHTML={{
                __html: bookInfo?.description.replace(/<b>/g, ""),
              }}
            />
          </section>
          {/* // over view
          // similar books
          // books from same authors */}
        </>
      )}
    </>
  );
}
