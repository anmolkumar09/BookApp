import React, { useEffect, useState } from "react";
import "./Book.css";
// furst we create URL which fetch data and get axios request from backend

// What does Axios do?
/*
Axios is a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data. It offers different ways of making requests such as GET , POST , PUT/PATCH , and DELETE .
*/
import axios from "axios";
import Book from "./Book";
import { useLocation } from "react-router-dom";
// const REACT_APP_BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;
const URL = `/api/books`;

// const fetchHandler = async () => {
//   return await axios.get(URL).then((resp) => resp.data);
//   // data varialbe get all the data it take promise thats why we used then
// };

const fetchHandler = async (filterString = "") => {
  const params = { filterString }; // Constructing an object with the filterString parameter
  return await axios.get(URL, { params }).then((resp) => resp.data);
};

const Books = () => {

  const location = useLocation();
  
  // Extract the search query parameter from the location object
  const searchParams = new URLSearchParams(location.search);

  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    // console.log("sdfhjsdfkjs   :    ", searchParams.get("search") || "")
    // const query = searchParams.get("search") || "";
    setSearchQuery(searchParams.get("search") || "")
    // setSearchQuery(query);
  }, [location.search]);
  
  // console.log(searchQuery)

  // now i use eseEffect it run after browser render the components and its runs only One's if we provide any value in the array then it ryrun the array and it will redner whole page in the browser.
  // console.log("books.js url   ", URL)

  const [books, setBooks] = useState('');
  useEffect(() => {
    fetchHandler(searchQuery).then((data) => setBooks(data.books));
  }, [searchQuery]);
  // console.log(books);
  // books () get the our two books data.

  return (
    <div>
      
      <li>
        <ul>
          {books &&
            books.map((book, i) => (
              <li key={i}>
                
                {/* here we get our book component * className used for*/}
                <Book book={book} 
                
                />
              </li>
            ))}
        </ul>
      </li>
    </div>
  );
};
export default Books;
// 1:25
