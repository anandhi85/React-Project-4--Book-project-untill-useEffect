import { useState, useContext } from "react";
import BooksContext from "../context/books";


function BookCreate () {
   const { createBook } =useContext(BooksContext)
   
    const  [title, setTitle] = useState("")
    const handleBookChange = (event) => {
        setTitle(event.target.value);
       
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
    }
  
    return (
        <div>
           
            <form  onSubmit ={handleSubmit}>
            <label>Title</label>
            <input onChange= {handleBookChange} name =  "book_title" />
            <button>submit</button>
          </form>

        </div>
    );
    
}

export default BookCreate;
