import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList () {
 const { books } = useContext(BooksContext)
  
    const renderedBooks =books.map((book) => {
       return <BookShow key ={book.id}  bookData={book} />
    })
    return (
        <div>
             {renderedBooks}
        </div>
    )
       
}

export default BookList;
