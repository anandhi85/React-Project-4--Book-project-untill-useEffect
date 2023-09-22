import { createContext, useState } from "react";
import axios from "axios";
const BooksContext = createContext();

function Provider( {children} ) {
    const [books, setBook] = useState([]);
     
    const fetchBooks = async () =>{
         const response = await axios.get("http://localhost:3002/books");
         
         setBook(response.data);
     }

      
    const createBook = async (title) => {
        const postResponse = await axios.post("http://localhost:3002/books", {title});
        const updatedBooks = [
            ...books, 
         postResponse.data
        ]
        setBook(updatedBooks);
                
    }
     const deleteBookById = async (id) => {
        await axios.delete ("http://localhost:3002/books/" + id);
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
                })
       setBook(updatedBooks);
     }

     const editBookById = async (id, newTitle) => {
        const response = await axios.put("http://localhost:3002/books/" + id, {
            title: newTitle
        });
        
        const updatedBooks = books.map((book) => {
        if (book.id === id) {
             return {
                ...book,
                ...response.data
             };
        }
        return book;
    })
        setBook(updatedBooks);
    }
   
     const valueToShare = {
        books,
        fetchBooks, 
        createBook,
        deleteBookById, 
        editBookById 

     };
 return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}
export {Provider};
export default BooksContext; 