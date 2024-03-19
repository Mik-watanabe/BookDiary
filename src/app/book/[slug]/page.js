'use client'
import React, { useState, useEffect } from 'react';
import { fetchBookData } from '@/app/lib/api';

export default function Page({params}) {
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
    console.log('book', bookData);
    let bookInfo = bookData?.volumeInfo;
    return (
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <h1>Title: {bookInfo?.title}</h1>
              <p> Author: {bookInfo?.authors.map((el) => el)}</p>
              <div dangerouslySetInnerHTML={{ __html: bookInfo?.description.replace(/<b>/g, '') }} />

              <p>Publisher: {bookInfo?.publisher}</p>
              <p>Publish date: {bookInfo?.publishedDate}</p>
            </div>
            // over view
            // similar books
            // books from same authors
          )}
        </div>
    )
}
