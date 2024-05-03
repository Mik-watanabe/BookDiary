import axios from "axios";

const API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

// Retrieving a specific volume
// GET https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey
export async function fetchBookData(bookId) {
    try {
        const response = await axios.get(`${API_BASE_URL}/${encodeURIComponent(bookId)}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error fetching book data:', error);
        throw error;
    }
}

// TODO: move to app directory and make api folders
